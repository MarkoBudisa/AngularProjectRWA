import {createReducer, on} from '@ngrx/store';
import * as Actions from './games.actions'
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Game } from "../models/game";

export interface GameState extends EntityState<Game> {
    selectedGame: number
}

const gameAdapter = createEntityAdapter<Game>();

export const initialStateGames: GameState = gameAdapter.getInitialState({
    selectedGame: 0
});

export const gameReducer = createReducer(
    initialStateGames,
    on(Actions.changeNumberOfSelectedTicketsToBuy, (state, {gameId: gameId, ticketsSelected: ticketsSelected}) => {
        const targetGame = state.entities[gameId];
        if(targetGame){
            return gameAdapter.setOne({...targetGame, ticketsSaled: ticketsSelected},state);
        }else{
            return state;
        }
    }
    ),
    on(Actions.loadGamesSuccess, (state, {games: games}) => {
        return gameAdapter.setAll(games, state)}
    ),
    on(Actions.selectGame,(state,{gameId: gameId}) => {
        return {...state, selectedGame: gameId}
    })
)
