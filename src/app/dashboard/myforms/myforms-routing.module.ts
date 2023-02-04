import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyformsPage } from './myforms.page';

const routes: Routes = [
  {
    path: '',
    component: MyformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyformsPageRoutingModule {}
