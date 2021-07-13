import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GamesService } from './services/games.service';
import {StoreModule} from '@ngrx/store';
import { gameReducer } from './store/games.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game.effects';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsListComponent } from './components/game-details-list/game-details-list.component';
import { GamesComponent } from './components/games/games.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelDetailsListComponent } from './components/hotel-details-list/hotel-details-list.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelEffects } from './store/hotel.effects';
import { HotelsService } from './services/hotels.service';
import { hotelReducer } from './store/hotels.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameListComponent,
    GameDetailsListComponent,
    GamesComponent,
    HotelDetailsComponent,
    HotelDetailsListComponent,
    HotelListComponent,
    HotelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({games: gameReducer, hotels: hotelReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([GameEffects,HotelEffects])
  ],
  providers: [GamesService,HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
