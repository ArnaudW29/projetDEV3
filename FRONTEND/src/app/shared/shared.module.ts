import { LeaderboardComponent } from './widgets/tables/leaderboard/leaderboard.component';
import { GameComponent } from './widgets/cards/game/game.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { OpponentComponent } from './widgets/cards/opponent/opponent.component';
import { ChatComponent } from './widgets/chat/chat.component';
import { AdminComponent } from './widgets/cards/admin/admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GameComponent,
    LeaderboardComponent,
    OpponentComponent,
    ChatComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    TextareaAutosizeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    GameComponent,
    LeaderboardComponent,
    OpponentComponent,
    ChatComponent,
    AdminComponent,
  ]
})
export class SharedModule { }
