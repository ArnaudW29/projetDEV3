import { IngameSidebarComponent } from './../../modules/ingame-sidebar/ingame-sidebar.component';
import { GameScreenComponent } from './../../modules/game-screen/game-screen.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { IndexComponent } from './index.component';
import { GameWindowComponent } from './../../modules/game-window/game-window.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from'@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    GameWindowComponent,
    GameScreenComponent,
    IngameSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class IndexModule { }
