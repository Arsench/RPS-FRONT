import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  userChoice: string = ''; 
  computerChoice: string = ''; 
  gameResult: string = ''; 
 
  constructor(private http: HttpClient) { } 
 
  ngOnInit() { 
    this.http.get<any>('api/gameResult').subscribe(response => { 

      const userChoice = response.playerChoice;
      if (userChoice !== undefined) {
        this.userChoice = userChoice;
      }
 
      const computerChoice = response.computerChoice;
      if (computerChoice !== undefined) {
        this.computerChoice = computerChoice;
      }
      
      const   gameResult  = response.result;
      if (gameResult !== undefined) {
        this.gameResult = gameResult;
      }

    }); 
  } 
  
  play(selectedElement: string) {
    this.http.post<any>('http://rps-game-play.duckdns.org:8080/api/play', { selectedElement })
      .subscribe(response => {
        this.userChoice = response.playerChoice;
        this.computerChoice = response.computerChoice;
        this.gameResult = response.result;
      }, error => {
        console.log('Error:', error);
      });
  }
  
}
