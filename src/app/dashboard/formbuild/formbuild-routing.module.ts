import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbuildPage } from './formbuild.page';

const routes: Routes = [
  {
    path: '',
    component: FormbuildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormbuildPageRoutingModule {}
