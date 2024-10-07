import { RawData, WebSocketServer } from "ws";
import { createServer } from "http";
import { SocketEvents } from "./enum/events";
import { handleCreateLobby } from "./handlers/lobby/create";
import { handleJoinLobby } from "./handlers/lobby/join";
import { randomUUID } from "crypto";
import { players } from "./game";
import { IPlayer } from "./models/player";

const port = 8080;
const server = createServer();
const socket = new WebSocketServer({ server });

socket.on("connection", (client) => {
  const player: IPlayer = {
    id: randomUUID(),
    client,
  };
  players.set(player.id, player);

  console.log(`Player ${player.id} connected`);

  client.on("message", (rawData: RawData) => {
    const { event, data } = JSON.parse(rawData.toString());
    switch (event) {
      case SocketEvents.CREATE_LOBBY:
        handleCreateLobby(player, data);
      case SocketEvents.JOIN_LOBBY:
        handleJoinLobby(player, data);
    }
  });

  client.on("close", () => {
    console.log(`Player ${player.id} disconnected`);
    players.delete(player.id);
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
