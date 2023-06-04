export interface Game {
  id: number;
  name: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface IElectronAPI {
  getGames: () => Promise<FetchGamesResponse>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
