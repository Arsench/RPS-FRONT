import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Import the HttpClientModule
import { GameComponent } from './game/game.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, GameComponent],
  imports: [BrowserModule, HttpClientModule], // <-- Add HttpClientModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

