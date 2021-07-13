import{createAction, props} from '@ngrx/store'
import { Game } from '../models/game'

export const changeNumberOfSelectedTicketsToBuy = createAction(
    "Change number of tickets to buy",
    props<{
        gameId: number,
        ticketsSelected: number
    }>()
)
export const buyTicket = createAction(
    "Buy ticket"
)

export const loadGames = createAction(
    "Load All Games",
)

export const loadGamesSuccess = createAction(
    "Load All Games Success",
    props<{
        games: Game[]
    }>()
)

export const selectGame = createAction(
    "Selected Game",
    props<{
        gameId: number
    }>()
)