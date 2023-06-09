import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchGames: () => ipcRenderer.invoke("fetchGames"),
  fetchImage: (url: string) => ipcRenderer.invoke("fetchImage", url),
});
