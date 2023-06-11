import { app, BrowserWindow, ipcMain } from "electron";
import isDev from "electron-is-dev";
import apiClient from "./services/api-client";
import axios, { Axios } from "axios";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle("fetchData", async (event, endpoint, requestConfig) => {
  const response = await apiClient.get(endpoint, { ...requestConfig });
  return response.data;
});

ipcMain.handle("fetchImage", async (event, url) => {
  const image = await axios(url, { responseType: "arraybuffer" });
  const raw = Buffer.from(image.data, "binary").toString("base64");
  const base64Image =
    "data:" + image.headers["content-type"] + ";base64," + raw;
  return base64Image;
});
