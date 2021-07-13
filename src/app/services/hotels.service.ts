import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map} from "rxjs/operators"
import { Observable, throwError } from 'rxjs';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { Hotel } from '../models/hotel';
import { selectSelectedHotel, selectSelectedHotelId } from '../store/hotels.selectors';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  getAll(){
    return this.httpClient.get<Hotel[]>(environment.apiUrl + "hotels").pipe(catchError(errorHandled));
  }
  getById(id: number){
    return this.httpClient.get<Hotel>(environment.apiUrl + "hotels/" + id).pipe(catchError(errorHandled));
  }
  bookRoom(): Observable<Hotel>{
    let ide: number = 0;
    this.store.select(selectSelectedHotelId).subscribe(id => ide = id);
    let body; 
    this.store.select(selectSelectedHotel).subscribe(hotel => body = hotel)
    return this.httpClient.put<Hotel>(environment.apiUrl + "hotels/" + `${ide}`, body).pipe(catchError(errorHandled));
  }

}
const errorHandled = (error: HttpErrorResponse) => {
  const errorMessage = (error.status === 0)? `Cant cooncet to api ${error.error}`: `Backend returned code ${error.status}`;
  return throwError(errorMessage);
}
