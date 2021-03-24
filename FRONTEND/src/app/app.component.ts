import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';
}

//Déclaration des variables
let game_1_description = "<p class='horizontal_center'>ceci est la description du premier jeu</p>"
let game_2_description = "<p class='horizontal_center'>ceci est la description du deuxieme jeu</p>"
let game_3_description = "<p class='horizontal_center'>ceci est la description du troisieme jeu</p>"
let game_4_description = "<p class='horizontal_center'>ceci est la description du quatrieme jeu</p>"

let game_1_leaderboard = {"pseudo1": "XXXX", "pseudo2": "XXXY", "pseudo3": "XYXY", "pseudo4": "YYYX", "pseudo5": "YYYY"}
let game_2_leaderboard = {"pseudo4": "XYYX", "pseudo3": "XXY", "pseudo1": "XYXY"}
let game_3_leaderboard = {"pseudo2": "X"}
let game_4_leaderboard = {"pseudo6": "XXXX", "pseudo7": "XXXY", "pseudo10": "YYYY"}

//Déclaration des fonctions
function initialiserPage() {

}

function get_description(game_number: string) {
  let description = document.getElementById("active_game_description")!
  let image_1 = document.getElementById("game_1_image")!
  let image_2 = document.getElementById("game_2_image")!
  let image_3 = document.getElementById("game_3_image")!
  let image_4 = document.getElementById("game_4_image")!
  switch(game_number) {
    case "game_1":
      description.innerHTML = game_1_description
      image_1.style.border = "1px solid #77216f"
      image_1.style.borderRadius = "10px"
      image_2.style.border = "none"
      image_3.style.border = "none"
      image_4.style.border = "none"
      break
    case "game_2":
      description.innerHTML = game_2_description
      image_2.style.border = "1px solid #77216f"
      image_2.style.borderRadius = "10px"
      image_1.style.border = "none"
      image_3.style.border = "none"
      image_4.style.border = "none"
      break
    case "game_3":
      description.innerHTML = game_3_description
      image_3.style.border = "1px solid #77216f"
      image_3.style.borderRadius = "10px"
      image_1.style.border = "none"
      image_2.style.border = "none"
      image_4.style.border = "none"
      break
    case "game_4":
      description.innerHTML = game_4_description
      image_4.style.border = "1px solid #77216f"
      image_4.style.borderRadius = "10px"
      image_1.style.border = "none"
      image_2.style.border = "none"
      image_3.style.border = "none"
      break	
  }
}