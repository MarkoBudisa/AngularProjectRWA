import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { HotelsComponent } from './components/hotels/hotels.component';


const routes: Routes = [
  {
    path: "hotels",
    component: HotelsComponent
  },
  {
    path: "games",
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
