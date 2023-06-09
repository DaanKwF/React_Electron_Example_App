export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface ElectronAPI {
  fetchGames: () => Promise<FetchGamesResponse>;
  fetchImage: (url: string) => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
