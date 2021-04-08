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
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
