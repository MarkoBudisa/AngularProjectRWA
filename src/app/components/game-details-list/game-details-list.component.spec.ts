import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsListComponent } from './game-details-list.component';

describe('GameDetailsListComponent', () => {
  let component: GameDetailsListComponent;
  let fixture: ComponentFixture<GameDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
