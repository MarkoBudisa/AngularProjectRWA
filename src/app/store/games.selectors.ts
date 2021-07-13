
import { createSelector } from "@ngrx/store";
import { Game } from "../models/game";
import { AppState } from "./app-state";

export const selectGamesFiture = (state: AppState) => {
    return state.games};

export const selectAllGames = createSelector(
    selectGamesFiture,
    (stateGames) => Object.values(stateGames.entities)
    .filter(game => game != null)
    .map(game => <Game>game)
)

export const selectAllGamesAsDictionary = createSelector(
    selectGamesFiture,
    (stateGames) => stateGames.entities
)

export const selectSelectedGameId = createSelector(
    selectGamesFiture,
    (allGames) => allGames.selectedGame
)

export const selectSelectedGame = createSelector(
    selectAllGamesAsDictionary,
    selectSelectedGameId,
    (allGames, gameId) => {
        return allGames[gameId] ?? null
    }
)