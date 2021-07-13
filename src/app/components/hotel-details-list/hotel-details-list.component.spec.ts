import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsListComponent } from './hotel-details-list.component';

describe('HotelDetailsListComponent', () => {
  let component: HotelDetailsListComponent;
  let fixture: ComponentFixture<HotelDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
