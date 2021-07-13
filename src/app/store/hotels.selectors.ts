
import { createSelector } from "@ngrx/store";
import { Hotel } from "../models/hotel";
import { AppState } from "./app-state";

export const selectHotelsFiture = (state: AppState) => {
    return state.hotels};

export const selectAllHotels = createSelector(
    selectHotelsFiture,
    (stateHotels) => Object.values(stateHotels.entities)
    .filter(hotel => hotel != null)
    .map(hotel => <Hotel>hotel)
)

export const selectAllHotelsAsDictionary = createSelector(
    selectHotelsFiture,
    (stateHotels) => stateHotels.entities
)

export const selectSelectedHotelId = createSelector(
    selectHotelsFiture,
    (allHotels) => allHotels.selectedHotel
)

export const selectSelectedHotel = createSelector(
    selectAllHotelsAsDictionary,
    selectSelectedHotelId,
    (allHotels, hotelId) => {
        return allHotels[hotelId] ?? null
    }
)