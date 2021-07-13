import {createReducer, on} from '@ngrx/store';
import * as Actions from './hotels.actions'
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Hotel } from '../models/hotel';


export interface HotelState extends EntityState<Hotel>{
    selectedHotel: number
}

const hotelAdapter = createEntityAdapter<Hotel>();

export const initialStateHotels: HotelState = hotelAdapter.getInitialState({
    selectedHotel: 0
})

export const hotelReducer = createReducer(
    initialStateHotels,
    on(Actions.changeNumberOfFreeRooms, (state, {hotelId: hotelId, numberOfRooms: numberOfRooms}) => {
        const targetHotel = state.entities[hotelId];
        if(targetHotel){
            return hotelAdapter.setOne({...targetHotel, numberOfRoomsBooked: numberOfRooms},state);
        }else{
            return state;
        }
    }
    ),
    on(Actions.loadHotelsSuccess, (state, {hotels: hotels}) => {
        return hotelAdapter.setAll(hotels, state)}
    ),
    on(Actions.selectHotel,(state,{hotelId: hotelId}) => {
        return {...state, selectedHotel: hotelId}
    })
)