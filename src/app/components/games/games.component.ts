import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from 'src/app/models/game';
import { AppState } from 'src/app/store/app-state';
import { selectSelectedGame } from 'src/app/store/games.selectors';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  selectedGame: Observable<Game | null> = of(null);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedGame = this.store.select(selectSelectedGame);
  }

}
