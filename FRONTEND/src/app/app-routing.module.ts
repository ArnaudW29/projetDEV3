import { GameWindowComponent } from './modules/game-window/game-window.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IndexComponent } from './layouts/index/index.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: IndexComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  },{
    path:'game_1',
    component: GameWindowComponent,
  },{
    path:'game_2',
    component: GameWindowComponent,
  },{
    path:'game_3',
    component: GameWindowComponent,
  },{
    path:'game_4',
    component: GameWindowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
