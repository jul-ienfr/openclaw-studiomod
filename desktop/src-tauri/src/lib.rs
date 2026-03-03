use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServerConfig {
    pub id: String,
    pub name: Option<String>,
    pub url: String,
    pub token: String,
    #[serde(rename = "lastUsed")]
    pub last_used: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Default)]
struct ServerStore {
    servers: Vec<ServerConfig>,
    last_server_id: Option<String>,
}

fn store_path() -> PathBuf {
    dirs::config_dir()
        .unwrap_or_else(|| PathBuf::from("."))
        .join("com.openclaw.studio-desktop")
        .join("servers.json")
}

fn load_store() -> ServerStore {
    let path = store_path();
    fs::read_to_string(&path)
        .ok()
        .and_then(|s| serde_json::from_str(&s).ok())
        .unwrap_or_default()
}

fn save_store(store: &ServerStore) {
    let path = store_path();
    if let Some(parent) = path.parent() {
        let _ = fs::create_dir_all(parent);
    }
    if let Ok(json) = serde_json::to_string_pretty(store) {
        let _ = fs::write(&path, json);
    }
}

#[tauri::command]
fn get_servers() -> Vec<ServerConfig> {
    load_store().servers
}

#[tauri::command]
fn save_server(config: serde_json::Value) -> Result<ServerConfig, String> {
    let mut store = load_store();
    let id = uuid::Uuid::new_v4().to_string();
    let server = ServerConfig {
        id: id.clone(),
        name: config["name"].as_str().map(|s| s.to_string()),
        url: config["url"]
            .as_str()
            .ok_or("url required")?
            .to_string(),
        token: config["token"]
            .as_str()
            .unwrap_or("")
            .to_string(),
        last_used: Some(
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .map(|d| d.as_secs().to_string())
                .unwrap_or_default(),
        ),
    };
    // Replace existing with same URL or add new
    let existing = store.servers.iter().position(|s| s.url == server.url);
    if let Some(i) = existing {
        store.servers[i] = server.clone();
    } else {
        store.servers.push(server.clone());
    }
    store.last_server_id = Some(id);
    save_store(&store);
    Ok(server)
}

#[tauri::command]
fn delete_server(id: String) -> Result<(), String> {
    let mut store = load_store();
    store.servers.retain(|s| s.id != id);
    if store.last_server_id.as_deref() == Some(&id) {
        store.last_server_id = None;
    }
    save_store(&store);
    Ok(())
}

#[tauri::command]
fn get_last_server() -> Option<ServerConfig> {
    let store = load_store();
    let last_id = store.last_server_id?;
    store.servers.into_iter().find(|s| s.id == last_id)
}

#[tauri::command]
fn set_last_server_id(id: String) -> Result<(), String> {
    let mut store = load_store();
    store.last_server_id = Some(id);
    save_store(&store);
    Ok(())
}

#[tauri::command]
fn test_connection(url: String, token: String) -> bool {
    let status_url = format!(
        "{}/api/mobile-access/status",
        url.trim_end_matches('/')
    );
    let client = reqwest::blocking::Client::builder()
        .timeout(std::time::Duration::from_secs(5))
        .build()
        .unwrap_or_else(|_| reqwest::blocking::Client::new());

    let mut req = client.get(&status_url);
    if !token.is_empty() {
        req = req.header("Cookie", format!("studio_access={}", token));
    }
    req.send().map(|r| r.status().is_success()).unwrap_or(false)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_servers,
            save_server,
            delete_server,
            get_last_server,
            set_last_server_id,
            test_connection,
        ])
        .run(tauri::generate_context!())
        .expect("error while running openclaw studio desktop");
}
