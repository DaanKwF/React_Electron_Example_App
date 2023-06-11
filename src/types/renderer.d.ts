export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface ElectronAPI {
  fetchData: <T>(endpoint: string) => Promise<FetchResponse<T>>;
  fetchImage: (url: string) => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
