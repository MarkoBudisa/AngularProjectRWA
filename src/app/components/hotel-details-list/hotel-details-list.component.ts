import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel-details-list',
  templateUrl: './hotel-details-list.component.html',
  styleUrls: ['./hotel-details-list.component.css']
})
export class HotelDetailsListComponent implements OnInit {

  @Input() hotel: Hotel | null = null;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  star = faStar;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.hotel)
      this.onClick.emit(this.hotel.id);
  }

}
