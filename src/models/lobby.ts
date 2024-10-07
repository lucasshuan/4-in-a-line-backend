import { IPlayer } from "./player";

export interface ILobby {
  id: string;
  name: string;
  password?: string;
  members: IPlayer[];
}

export interface ICreateLobbyData {
  name: string;
  password?: string;
}
