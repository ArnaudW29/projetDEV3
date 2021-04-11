// import other modules
import { WidgetsModule } from './../widgets/widgets.module';

// import all module components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

// angular material imports
import { AngularMaterialModule } from './../angular-material/angular-material.module';

// default imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    WidgetsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
