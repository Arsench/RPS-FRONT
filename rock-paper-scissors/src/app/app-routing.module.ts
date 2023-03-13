import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' }, // redirect to game page
  { path: 'game', component: GameComponent }, // game page route
  { path: '**', redirectTo: '/game' } // redirect to game page if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


