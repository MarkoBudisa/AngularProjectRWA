
import { GameState } from "./games.reducer";
import { HotelState } from "./hotels.reducer";

export interface AppState{
    games: GameState,
    hotels: HotelState
}