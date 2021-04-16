// ce module permet d'activer le routing angular
// en fonction de l'url, le composant "router-outlet" redirigera vers le composant aproprie

import { AboutComponent } from './modules/about/about.component';
import { GameScreenComponent } from './modules/game-screen/game-screen.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TicTacToeComponent } from './widgets/tic-tac-toe/tic-tac-toe.component';
import { QuatreCentVingtEtUnComponent } from './widgets/quatre-cent-vingt-et-un/quatre-cent-vingt-et-un.component';
import { PuissanceQuatreComponent } from './widgets/puissance-quatre/puissance-quatre.component';
import { GarticPhonesComponent } from './widgets/gartic-phones/gartic-phones.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
},{
  path: 'game_1',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},{
  path: 'game_2',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: QuatreCentVingtEtUnComponent
    }
  ]
},{
  path: 'game_3',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: PuissanceQuatreComponent
    }
  ]
},{
  path: 'game_4',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: GarticPhonesComponent
    }
  ]
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
