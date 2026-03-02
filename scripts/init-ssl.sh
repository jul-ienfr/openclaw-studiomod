#!/usr/bin/env bash
set -euo pipefail

# =============================================================================
# OpenClaw Studio — First-time SSL certificate setup
#
# Usage:
#   ./scripts/init-ssl.sh studio.example.com admin@example.com
#
# Prerequisites:
#   - DNS A record pointing to this server's IP
#   - Ports 80 and 443 open
#   - Docker and docker compose installed
# =============================================================================

DOMAIN="${1:?Usage: $0 <domain> <email>}"
EMAIL="${2:?Usage: $0 <domain> <email>}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "==> Setting up SSL for ${DOMAIN}"

# Create required directories
mkdir -p certbot/www certbot/conf

# Update nginx config with the actual domain
sed -i.bak "s/server_name _;/server_name ${DOMAIN};/" nginx/default.conf
sed -i.bak "s|/etc/letsencrypt/live/studio/|/etc/letsencrypt/live/${DOMAIN}/|g" nginx/default.conf
rm -f nginx/default.conf.bak

# Step 1: Start nginx with a temporary self-signed cert so certbot can reach /.well-known
echo "==> Creating temporary self-signed certificate..."
mkdir -p "certbot/conf/live/${DOMAIN}"
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
  -keyout "certbot/conf/live/${DOMAIN}/privkey.pem" \
  -out "certbot/conf/live/${DOMAIN}/fullchain.pem" \
  -subj "/CN=localhost" 2>/dev/null

# Step 2: Start nginx (it will use the temporary cert)
echo "==> Starting nginx..."
docker compose up -d nginx

# Step 3: Request real certificate from Let's Encrypt
echo "==> Requesting certificate from Let's Encrypt..."
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  -d "${DOMAIN}" \
  --email "${EMAIL}" \
  --agree-tos \
  --non-interactive \
  --force-renewal

# Step 4: Reload nginx with the real certificate
echo "==> Reloading nginx with real certificate..."
docker compose exec nginx nginx -s reload

# Step 5: Start all services
echo "==> Starting all services..."
docker compose up -d

echo ""
echo "==> Done! OpenClaw Studio is live at:"
echo "    https://${DOMAIN}"
echo ""
echo "    Certificates will auto-renew via the certbot container."
