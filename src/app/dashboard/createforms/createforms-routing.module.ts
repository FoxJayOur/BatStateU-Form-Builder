import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateformsPage } from './createforms.page';

const routes: Routes = [
  {
    path: '',
    component: CreateformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateformsPageRoutingModule {}
