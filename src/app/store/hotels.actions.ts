import{createAction, props} from '@ngrx/store'
import { Game } from '../models/game'
import { Hotel } from '../models/hotel'

export const changeNumberOfFreeRooms = createAction(
    "Change number of free rooms",
    props<{
        hotelId: number,
        numberOfRooms: number
    }>()
)
export const bookRoom = createAction(
    "Book a room"
)

export const loadHotels = createAction(
    "Load All Hotels",
)

export const loadHotelsSuccess = createAction(
    "Load All Hotels Success",
    props<{
        hotels: Hotel[]
    }>()
)

export const selectHotel = createAction(
    "Selected Hotel",
    props<{
        hotelId: number
    }>()
)