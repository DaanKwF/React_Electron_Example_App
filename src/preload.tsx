import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getGames: () => ipcRenderer.invoke("getGames"),
});
