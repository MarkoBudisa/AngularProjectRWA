import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { AppState } from 'src/app/store/app-state';
import { selectSelectedHotel } from 'src/app/store/hotels.selectors';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  selectedHotel: Observable<Hotel | null> = of(null);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedHotel = this.store.select(selectSelectedHotel);
  }

}
