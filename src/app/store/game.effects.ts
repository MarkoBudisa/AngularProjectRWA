import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { GamesService } from "../services/games.service";
import * as GameActions from './games.actions'


@Injectable()
export class GameEffects {

    constructor(private gamesService: GamesService, private actions$: Actions){}
    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GameActions.loadGames),
            mergeMap(() => this.gamesService.getAll()
            .pipe(
                map((games) => {
                    return(GameActions.loadGamesSuccess({games: games}))}),
                catchError(() => of({type: "load error"}))
            ))
                
        ) 
    )
    buyTicketEffect = createEffect(() => {
        return this.actions$.pipe(
            ofType(GameActions.buyTicket),
            mergeMap(() => this.gamesService.buyTickets()
            .pipe(
                map((game) => {
                    return(GameActions.changeNumberOfSelectedTicketsToBuy({gameId: game.id, ticketsSelected: game.ticketsSaled}))
                }),
                catchError(() => of({type: "put error"}))
            ))
        )
    }
    )
}