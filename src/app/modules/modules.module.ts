// ce module concerne tous les composants situes dans le dossier
// "modules" et permet de gerer les importations necessaires a leur
// fonctionnement ainsi que l'exportation de ces composants

// les composants declares dans ce module correspondent au composant
// parent de chaque page de l'application (about, admin, dashboard,
// game-screen, profile, login, register), a l'exception de la barre laterale des jeux
// qui est elle inclue au sein du composant game-screen

// import other modules
import { WidgetsModule } from './../widgets/widgets.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// import all module components
import { ProfileComponent } from './profile/profile.component';
import { IngameSidebarComponent } from './ingame-sidebar/ingame-sidebar.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// angular material imports
import { AngularMaterialModule } from './../angular-material/angular-material.module';

// default imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    GameScreenComponent,
    IngameSidebarComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    WidgetsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    GameScreenComponent,
    IngameSidebarComponent,
    ProfileComponent,
    ReactiveFormsModule,
  ]
})
export class ModulesModule { }
