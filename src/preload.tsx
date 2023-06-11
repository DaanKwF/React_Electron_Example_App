import { AxiosRequestConfig } from "axios";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchData: (endpoint: string, requestConfig: AxiosRequestConfig) =>
    ipcRenderer.invoke("fetchData", endpoint, requestConfig),
  fetchImage: (url: string) => ipcRenderer.invoke("fetchImage", url),
});
