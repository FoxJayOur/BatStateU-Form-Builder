import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'myforms',
    loadChildren: () => import('./myforms/myforms.module').then( m => m.MyformsPageModule)
  },
  {
    path: 'createforms',
    loadChildren: () => import('./createforms/createforms.module').then( m => m.CreateformsPageModule)
  },
  {
    path: 'viewforms',
    loadChildren: () => import('./viewforms/viewforms.module').then( m => m.ViewformsPageModule)
  },
  {
    path: 'viewratings',
    loadChildren: () => import('./viewratings/viewratings.module').then( m => m.ViewratingsPageModule)
  },
  {
    path: 'formbuild',
    loadChildren: () => import('./formbuild/formbuild.module').then( m => m.FormbuildPageModule)
  },
  {
    path: 'answerform',
    loadChildren: () => import('./answerform/answerform.module').then( m => m.AnswerformPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
