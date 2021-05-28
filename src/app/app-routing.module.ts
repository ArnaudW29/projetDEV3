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
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
},{
  path: 'morpion1',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},{
  path: 'morpion2',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},{
  path: 'morpion3',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},
{
  path: 'morpion4',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},
{
  path: 'morpion5',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: TicTacToeComponent
    }
  ]
},{
  path: '421',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: QuatreCentVingtEtUnComponent
    }
  ]
},{
  path: 'puissance4',
  component: GameScreenComponent,
  children: [
    {
      path: '',
      component: PuissanceQuatreComponent
    }
  ]
},{
  path: 'garticPhones',
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
},{
  path: 'register',
  component: RegisterComponent
},{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
