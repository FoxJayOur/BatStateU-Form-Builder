import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerformPage } from './answerform.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerformPageRoutingModule {}
