import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { HotelsService } from "../services/hotels.service";
import * as HotelActions from './hotels.actions'
import { HotelState } from "./hotels.reducer";


@Injectable()
export class HotelEffects {

    constructor(private hotelsService: HotelsService, private actions$: Actions){}
    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HotelActions.loadHotels),
            mergeMap(() => this.hotelsService.getAll()
            .pipe(
                map((hotels) => {
                    return(HotelActions.loadHotelsSuccess({hotels: hotels}))}),
                catchError(() => of({type: "load error"}))
            ))
                
        ) 
    )
    buyTicketEffect = createEffect(() => {
        return this.actions$.pipe(
            ofType(HotelActions.bookRoom),
            mergeMap(() => this.hotelsService.bookRoom()
            .pipe(
                map((hotel) => {
                    return(HotelActions.changeNumberOfFreeRooms({hotelId: hotel.id, numberOfRooms: hotel.numberOfRoomsBooked}))
                }),
                catchError(() => of({type: "put error"}))
            ))
        )
    }
    )
}