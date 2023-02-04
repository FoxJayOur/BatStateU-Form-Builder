import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewratingsPageRoutingModule } from './viewratings-routing.module';

import { ViewratingsPage } from './viewratings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewratingsPageRoutingModule
  ],
  declarations: [ViewratingsPage]
})
export class ViewratingsPageModule {}
