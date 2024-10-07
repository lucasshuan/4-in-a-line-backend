import { SocketEvents } from "../enum/events";

export interface ISocketMessage {
  event: SocketEvents;
  data: any;
}
