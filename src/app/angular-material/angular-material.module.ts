// ce module permet de centraliser l'entierete des importations
// angular material afin d'eviter qu'ils soient disperses au sein
// des differents composants angular
// ps : importe aussi fxflex car utilise frequemment

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
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule } from '@angular/material/select';

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
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }
