import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game';
import { AppState } from 'src/app/store/app-state';
import { buyTicket, changeNumberOfSelectedTicketsToBuy } from 'src/app/store/games.actions';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailsComponent implements OnInit {

  @Input() game: Game | null = null;

  public minus = faMinusSquare;
  public plus = faPlusSquare;
  public numberOfTickets: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.numberOfTickets = 0;
  }

  buyTicket(){
     if(this.game){
      this.store.dispatch(changeNumberOfSelectedTicketsToBuy({gameId: this.game.id, ticketsSelected: this.game.ticketsSaled + this.numberOfTickets}));
      this.store.dispatch(buyTicket());
      Swal.fire({
        "title": "You have successfully purchased ticket/s",
        "text": `Total bill: ${this.numberOfTickets * this.game.ticketPrace} $`,
        "icon": "success",
        "confirmButtonText": "Ok"
      })
      this.numberOfTickets = 0;
     }
  }
  decrease(){
    if(this.numberOfTickets > 0){
      this.numberOfTickets -= 1;
    }
  }
  increase(){
    this.numberOfTickets += 1;
  }

}
