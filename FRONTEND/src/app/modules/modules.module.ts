
// import other modules
import { WidgetsModule } from './../widgets/widgets.module';
import { HttpClientModule } from '@angular/common/http';

// import all module components
import { ProfileComponent } from './profile/profile.component';
import { IngameSidebarComponent } from './ingame-sidebar/ingame-sidebar.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

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
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    WidgetsModule,
    HttpClientModule
  ],
  exports: [
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    GameScreenComponent,
    IngameSidebarComponent,
    ProfileComponent
  ]
})
export class ModulesModule { }
