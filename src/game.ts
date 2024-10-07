import { IPlayer } from "./models/player";
import { ILobby } from "./models/lobby";

const players = new Map<string, IPlayer>();
const lobbies = new Map<string, ILobby>();

export { players, lobbies };
