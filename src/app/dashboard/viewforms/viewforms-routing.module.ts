import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewformsPage } from './viewforms.page';

const routes: Routes = [
  {
    path: '',
    component: ViewformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewformsPageRoutingModule {}
