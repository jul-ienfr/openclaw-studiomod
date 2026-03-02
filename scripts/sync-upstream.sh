#!/bin/bash
set -euo pipefail

cd ~/code/openclaw-studio

# ─── Vérifications préalables ───

if ! git remote get-url upstream &>/dev/null; then
    echo "⚠ Remote 'upstream' non configuré"
    echo "→ git remote add upstream https://github.com/grp06/openclaw-studio.git"
    exit 1
fi

# ─── Fetch upstream ───

echo "Fetching upstream..."
git fetch upstream

UPSTREAM_BRANCH=$(git remote show upstream | grep 'HEAD branch' | awk '{print $NF}')
echo "Branche upstream détectée : ${UPSTREAM_BRANCH}"

# ─── Stash si nécessaire ───

STASHED=false
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "⚠ Changements locaux détectés — stash automatique"
    git stash push -m "sync-upstream auto-stash $(date +%Y%m%d_%H%M%S)"
    STASHED=true
fi

# ─── Analyse des commits ───

echo ""
echo "=== Commits upstream non mergés ==="
git log "HEAD..upstream/${UPSTREAM_BRANCH}" --oneline
COMMIT_COUNT=$(git rev-list --count "HEAD..upstream/${UPSTREAM_BRANCH}")
echo "→ ${COMMIT_COUNT} commits à merger"
echo ""

# ─── Détection conflits potentiels ───

echo "=== Fichiers upstream qui touchent nos modifications ==="
CONFLICTS=$(git diff "HEAD...upstream/${UPSTREAM_BRANCH}" --name-only 2>/dev/null | grep -E "(FleetSidebar|package\.json|next\.config)" || true)
if [ -n "$CONFLICTS" ]; then
    echo "$CONFLICTS"
    echo "⚠ Conflits potentiels sur ces fichiers — revue manuelle nécessaire"
else
    echo "✓ Pas de conflit attendu sur nos fichiers modifiés"
fi
echo ""

# ─── Sortie si déjà à jour ───

if [ "$COMMIT_COUNT" -eq 0 ]; then
    echo "✓ Déjà à jour avec upstream/${UPSTREAM_BRANCH}"
    if $STASHED; then git stash pop && echo "✓ Changements locaux restaurés"; fi
    exit 0
fi

# ─── Confirmation ───

read -rp "Merger upstream/${UPSTREAM_BRANCH} dans la branche courante ? (y/N) " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "Annulé."
    if $STASHED; then git stash pop && echo "✓ Changements locaux restaurés"; fi
    exit 0
fi

# ─── Merge ───

if ! git merge "upstream/${UPSTREAM_BRANCH}" --no-edit; then
    echo ""
    echo "⚠ Conflits de merge détectés — résoudre manuellement :"
    git diff --name-only --diff-filter=U
    echo ""
    echo "→ Après résolution : git add . && git merge --continue"
    echo "→ Pour annuler : git merge --abort"
    if $STASHED; then
        echo "→ Stash présent (à restaurer après merge) : git stash pop"
    fi
    exit 1
fi

echo "✓ Merge réussi"

# ─── Rebuild ───

echo ""
echo "=== npm install ==="
npm install

echo ""
echo "=== Build ==="
if npm run build; then
    echo "✓ Build OK"
else
    echo "✗ Build échoué — vérifier les erreurs ci-dessus"
fi

# ─── Restauration ───

if $STASHED; then
    git stash pop
    echo "✓ Changements locaux restaurés"
fi

echo ""
echo "✓ Sync terminé"
