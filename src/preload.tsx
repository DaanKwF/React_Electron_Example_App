import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchData: (endpoint: string) => ipcRenderer.invoke("fetchData", endpoint),
  fetchImage: (url: string) => ipcRenderer.invoke("fetchImage", url),
});
