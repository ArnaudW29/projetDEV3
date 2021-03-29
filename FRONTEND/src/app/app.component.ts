import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';

  //Déclaration des fonctions
  get_description(game_number: string) {
    let image_1 = document.getElementById("game_1_image")!
    let image_2 = document.getElementById("game_2_image")!
    let image_3 = document.getElementById("game_3_image")!
    let image_4 = document.getElementById("game_4_image")!
    switch(game_number) {
      case "game_1":
        image_1.style.border = "1px solid #77216f"
        image_1.style.borderRadius = "10px"
        image_2.style.border = "none"
        image_3.style.border = "none"
        image_4.style.border = "none"
        this.make_description(game_number)
        break
      case "game_2":
        image_2.style.border = "1px solid #77216f"
        image_2.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_3.style.border = "none"
        image_4.style.border = "none"
        this.make_description(game_number)
        break
      case "game_3":
        image_3.style.border = "1px solid #77216f"
        image_3.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_2.style.border = "none"
        image_4.style.border = "none"
        this.make_description(game_number)
        break
      case "game_4":
        image_4.style.border = "1px solid #77216f"
        image_4.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_2.style.border = "none"
        image_3.style.border = "none"
        this.make_description(game_number)
        break	
    }
  }

  make_description(game_number: string) {
    let description = document.getElementById("active_game_description")!
    let xhr = new XMLHttpRequest();
    let leaderboard = {};
    let str = '<tr style="border:1px solid #fff;color:#e95420"><th colspan="2">pseudo</th><th colspan="2">nb points</th></tr>';
    xhr.open('get','http://localhost:5000/description/' + game_number);
    xhr.onload = function(){
      description.innerHTML = xhr.responseText
    }
    xhr.send();
  }
}