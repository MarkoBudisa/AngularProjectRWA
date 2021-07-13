import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { AppState } from 'src/app/store/app-state';
import { selectHotel } from 'src/app/store/hotels.actions';
import { selectAllHotels } from 'src/app/store/hotels.selectors';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Observable<readonly (Hotel)[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hotels = this.store.select(selectAllHotels);
  }

  selectedHotel(hotelId: number){
    this.store.dispatch(selectHotel({hotelId: hotelId}))
  }

}
