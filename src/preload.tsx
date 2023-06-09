import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchGames: () => ipcRenderer.invoke("fetchGames"),
});
