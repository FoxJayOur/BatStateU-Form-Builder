import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewformsPageRoutingModule } from './viewforms-routing.module';

import { ViewformsPage } from './viewforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewformsPageRoutingModule
  ],
  declarations: [ViewformsPage]
})
export class ViewformsPageModule {}
