import { WebSocket } from "ws";

export interface IPlayer {
  id: string;
  client: WebSocket;
  lobby?: string;
}
