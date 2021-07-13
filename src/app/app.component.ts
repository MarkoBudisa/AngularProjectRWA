import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from './store/app-state';
import * as ActionGames from './store/games.actions';
import { selectSelectedGame } from './store/games.selectors';
import * as ActionHotels from './store/hotels.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'ang-project';

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(ActionGames.loadGames());
    this.store.dispatch(ActionHotels.loadHotels());
  }
}


