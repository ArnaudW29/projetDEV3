import { AboutComponent } from './modules/about/about.component';
import { GameScreenComponent } from './modules/game-screen/game-screen.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
},{
  path: 'game_1',
  component: GameScreenComponent
},{
  path: 'game_2',
  component: GameScreenComponent
},{
  path: 'game_3',
  component: GameScreenComponent
},{
  path: 'game_4',
  component: GameScreenComponent
},{
  path: 'admin',
  component: AdminComponent
},{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
