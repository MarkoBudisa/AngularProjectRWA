import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from 'src/app/models/game';
import { AppState } from 'src/app/store/app-state';
import { selectGame } from 'src/app/store/games.actions';
import { selectAllGames } from 'src/app/store/games.selectors';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent implements OnInit {

  games: Observable<readonly (Game)[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.games = this.store.select(selectAllGames);
  }

  selectedGame(gameId: number){
    this.store.dispatch(selectGame({gameId: gameId}))
  }

}
