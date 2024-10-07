import { SocketEvents } from "../../enum/events";
import { lobbies } from "../../game";
import { IPlayer } from "../../models/player";

export function handleJoinLobby(player: IPlayer, id: string) {
  const lobby = lobbies.get(id);
  if (!lobby) {
    return;
  }
  lobby.members.push(player);
  player.client.send(
    JSON.stringify({ event: SocketEvents.LOBBY_UPDATED, data: lobby })
  );
}
