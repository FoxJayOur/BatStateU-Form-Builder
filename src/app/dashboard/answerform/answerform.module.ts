import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AnswerformPageRoutingModule } from './answerform-routing.module';
import { HelloComponent } from './hello.component';
import { AnswerformPage } from './answerform.page';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    AnswerformPageRoutingModule
  ],
  declarations: [AnswerformPage, HelloComponent],
  bootstrap: [AppComponent]
})
export class AnswerformPageModule {}
