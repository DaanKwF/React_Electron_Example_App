export interface Game {
  id: number;
  name: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface ElectronAPI {
  fetchGames: () => Promise<FetchGamesResponse>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
