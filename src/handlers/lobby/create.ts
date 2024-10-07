import { randomUUID } from "crypto";
import { ICreateLobbyData, ILobby } from "../../models/lobby";
import { SocketEvents } from "../../enum/events";
import { lobbies } from "../../game";
import { IPlayer } from "../../models/player";
import { sendMessage } from "../../utils/send";

export function handleCreateLobby(
  player: IPlayer,
  { name, password }: ICreateLobbyData
) {
  console.log("Creating lobby...");
  const lobby: ILobby = {
    id: randomUUID(),
    name,
    password,
    members: [player],
  };
  lobbies.set(lobby.id, lobby);
  console.log(`Created lobby with id ${lobby.id}`);
  sendMessage(player.client, SocketEvents.LOBBY_LIST_UPDATED, lobbies);
}
