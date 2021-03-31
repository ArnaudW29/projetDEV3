import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  get_leaderboard(game_number: string) {
    let table = document.getElementById("scores")!
    let image_1 = document.getElementById("game_logo_1")!
    let image_2 = document.getElementById("game_logo_2")!
    let image_3 = document.getElementById("game_logo_3")!
    let image_4 = document.getElementById("game_logo_4")!
    switch(game_number) {
      case "game_1":
        image_1.style.border = "1px solid #e95420"
        image_1.style.borderRadius = "10px"
        image_2.style.border = "none"
        image_3.style.border = "none"
        image_4.style.border = "none"
        this.make_leaderboard(game_number)
        break
      case "game_2":
        image_2.style.border = "1px solid #e95420"
        image_2.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_3.style.border = "none"
        image_4.style.border = "none"
        this.make_leaderboard(game_number)
        break
      case "game_3":
        image_3.style.border = "1px solid #e95420"
        image_3.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_2.style.border = "none"
        image_4.style.border = "none"
        this.make_leaderboard(game_number)
        break
      case "game_4":
        image_4.style.border = "1px solid #e95420"
        image_4.style.borderRadius = "10px"
        image_1.style.border = "none"
        image_2.style.border = "none"
        image_3.style.border = "none"
        this.make_leaderboard(game_number)
        break
    }
  }
  
  make_leaderboard(game_number: string) {
    let xhr = new XMLHttpRequest();
    let leaderboard = {};
    let str = '<tr style="border:1px solid #fff;color:#e95420"><th colspan="2">pseudo</th><th colspan="2">nb points</th></tr>';
    xhr.open('get','http://localhost:3000/leaderboard/' + game_number);
    xhr.onload = function(){
      leaderboard = JSON.parse(xhr.responseText);
      let pseudos = Object.keys(leaderboard)
      let scores = Object.values(leaderboard)
      for(let i = 0; i < pseudos.length; i++) {
        str += '<tr><td style="border-left:1px solid #fff;border-right:1px solid #fff;color:#fff" colspan="2">' + pseudos[i]
        str += '</td><td style="border-left:1px solid #fff;border-right:1px solid #fff;color:#fff" colspan="2">' + scores[i] + '</td></tr>'
      }
      let table = document.getElementById("scores")!;
      table.innerHTML = str;
    }
    xhr.send();
  }
}