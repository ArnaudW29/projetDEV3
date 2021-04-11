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

@NgModule({
  declarations: [
    AdminLogsComponent,
    GameChatRoomComponent,
    GameExpandedComponent,
    GameIconComponent,
    LeaderboardComponent,
    ProfileCardComponent
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
    ProfileCardComponent
  ],
  providers: [
    ChatService
  ]
})
export class WidgetsModule { }
