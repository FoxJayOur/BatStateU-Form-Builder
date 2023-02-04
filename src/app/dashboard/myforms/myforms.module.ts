import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyformsPageRoutingModule } from './myforms-routing.module';

import { MyformsPage } from './myforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyformsPageRoutingModule
  ],
  declarations: [MyformsPage]
})
export class MyformsPageModule {}
