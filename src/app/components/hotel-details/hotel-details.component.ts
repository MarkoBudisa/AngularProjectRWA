import { Component, Input, OnInit } from '@angular/core';
import { bookRoom, changeNumberOfFreeRooms } from 'src/app/store/hotels.actions';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import Swal from 'sweetalert2'
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  @Input() hotel: Hotel | null = null;

  public minus = faMinusSquare;
  public plus = faPlusSquare;
  public numberOfRooms: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.numberOfRooms = 0;
  }

  bookRoom(){
     if(this.hotel){
      this.store.dispatch(changeNumberOfFreeRooms({hotelId: this.hotel.id, numberOfRooms: this.hotel.numberOfRoomsBooked + this.numberOfRooms}));
      this.store.dispatch(bookRoom());
      Swal.fire({
        "title": "You have successfully booked room/s",
        "text": `Total bill per night: ${this.numberOfRooms * this.hotel.oneNightPrice} $`,
        "icon": "success",
        "confirmButtonText": "Ok"
      })
      this.numberOfRooms = 0;
     }
  }
  decrease(){
    if(this.numberOfRooms > 0){
      this.numberOfRooms -= 1;
    }
  }
  increase(){
    this.numberOfRooms += 1;
  }

}
