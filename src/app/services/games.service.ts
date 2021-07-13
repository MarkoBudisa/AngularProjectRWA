import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map} from "rxjs/operators"
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/game';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { selectSelectedGame, selectSelectedGameId } from '../store/games.selectors';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  getAll(){
    return this.httpClient.get<Game[]>(environment.apiUrl + "games").pipe(catchError(errorHandled));
  }
  getById(id: number){
    return this.httpClient.get<Game>(environment.apiUrl + "games/" + id).pipe(catchError(errorHandled));
  }
  buyTickets(): Observable<Game>{
    let ide: number = 0;
    this.store.select(selectSelectedGameId).subscribe(id => ide = id);
    let body; 
    this.store.select(selectSelectedGame).subscribe(game => body = game)
    return this.httpClient.put<Game>(environment.apiUrl + "games/" + `${ide}`, body).pipe(catchError(errorHandled));
  }

}
const errorHandled = (error: HttpErrorResponse) => {
  const errorMessage = (error.status === 0)? `Cant cooncet to api ${error.error}`: `Backend returned code ${error.status}`;
  return throwError(errorMessage);
}

