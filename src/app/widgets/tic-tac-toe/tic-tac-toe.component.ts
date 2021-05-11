// default imports
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// import services
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-widget-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  // variables
  squares: string[];
  xIsNext: boolean;
  winner: string;
  isDisabled: boolean = false;
  ingameSideBarOpen: boolean;

  constructor(private sideBarService: SidebarService) {}

  /**
   * 
   * permet d'initialiser une partie lors de l'initialisation de la page
   * 
   * permet aussi de connaitre l'etat de la ingame sidebar (chat)
   * 
   */
  ngOnInit() {
    this.newGame();
    this.sideBarService.getIngameSideBarOpen().subscribe(ingameSideBarOpen => this.ingameSideBarOpen = ingameSideBarOpen);
  }

  /**
   * 
   * initialise une partie à vide
   * 
   */
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isDisabled = false;
  }

  /**
   * 
   * renvoie le joueur actif
   * 
   */
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  /**
   * 
   * permet a un joueur de selectionner une case du plateau
   * 
   * @param idx - l'index identifiant la case selectionnee par le joueur
   * 
   */
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    if(this.winner){
      this.isDisabled = true;
    }
  }

  /**
   * 
   * determine si un joueur a gagne la partie en comparant le plateau de jeu avec les conditions de victoires
   * 
   * @returns - le joueur ayant gagne la partie
   * 
   */
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.player;
      }
    }
    return null;
  }

  /**
   * 
   * permet de toggle le chat ingame en appuyant sur un bouton
   * 
   */
  toggleIngameSideBar() {
    this.sideBarService.changeIngameSidebarOpen(!this.ingameSideBarOpen);
  }
}
