// ce module concerne tous les composants situes dans le dossier
// "widgets" et permet de gerer les importations necessaires a leur
// fonctionnement ainsi que l'exportation de ces composants

// les composants declares dans ce module correspondent aux "blocs de 
// construction" utilises pour former les composants des dossier "modules"
// et "shared"

// service imports
import { ChatService } from './../chat.service';

// other imports
import { FormsModule } from '@angular/forms';

// import all module components
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameIconComponent } from './game-icon/game-icon.component';
import { GameExpandedComponent } from './game-expanded/game-expanded.component';
import { GameChatRoomComponent } from './game-chat-room/game-chat-room.component';
import { AdminLogsComponent } from './admin-logs/admin-logs.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

// angular material imports
import { AngularMaterialModule } from './../angular-material/angular-material.module';

// default imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { QuatreCentVingtEtUnComponent } from './quatre-cent-vingt-et-un/quatre-cent-vingt-et-un.component';
import { PuissanceQuatreComponent } from './puissance-quatre/puissance-quatre.component';
import { GarticPhonesComponent } from './gartic-phones/gartic-phones.component';
import { SquareComponent } from './tic-tac-toe/square/square.component';

@NgModule({
  declarations: [
    AdminLogsComponent,
    GameChatRoomComponent,
    GameExpandedComponent,
    GameIconComponent,
    LeaderboardComponent,
    ProfileCardComponent,
    TicTacToeComponent,
    QuatreCentVingtEtUnComponent,
    PuissanceQuatreComponent,
    GarticPhonesComponent,
    SquareComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    AdminLogsComponent,
    GameChatRoomComponent,
    GameExpandedComponent,
    GameIconComponent,
    LeaderboardComponent,
    ProfileCardComponent,
    TicTacToeComponent,
    QuatreCentVingtEtUnComponent,
    PuissanceQuatreComponent,
    GarticPhonesComponent
  ],
  providers: [
    ChatService
  ]
})
export class WidgetsModule { }
