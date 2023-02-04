import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewratingsPage } from './viewratings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewratingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewratingsPageRoutingModule {}
