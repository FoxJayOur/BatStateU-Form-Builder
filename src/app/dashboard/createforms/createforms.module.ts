import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateformsPageRoutingModule } from './createforms-routing.module';

import { CreateformsPage } from './createforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateformsPageRoutingModule
  ],
  declarations: [CreateformsPage]
})
export class CreateformsPageModule {}
