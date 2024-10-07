import { WebSocket } from "ws";
import { ISocketMessage } from "../models/socket";

export function sendMessage(client: WebSocket, event: string, data: any) {
  const message = { event, data } as ISocketMessage;
  const json = JSON.stringify(message);
  client.send(json);
}
