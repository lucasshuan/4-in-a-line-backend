import { WebSocket } from "ws";
import { SocketEvents } from "./enum/events";

async function run() {
  const url = "ws://localhost:8080";
  const players = [new WebSocket(url), new WebSocket(url)];

  await new Promise((resolve) => players[0].once("open", resolve));

  console.log("Player 1 connected");

  players[0].send(
    JSON.stringify({
      event: SocketEvents.CREATE_LOBBY,
      data: { name: "Noble's house", password: "noble" },
    })
  );

  process.exit(0);
}

run();
