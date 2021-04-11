// default imports
import { NgModule } from '@angular/core';

// angular material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// fxflex module import
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
