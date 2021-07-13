import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-details-list',
  templateUrl: './game-details-list.component.html',
  styleUrls: ['./game-details-list.component.css']
})
export class GameDetailsListComponent implements OnInit {

  @Input() game: Game | null = null;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.game)
      this.onClick.emit(this.game.id);
  }

}
