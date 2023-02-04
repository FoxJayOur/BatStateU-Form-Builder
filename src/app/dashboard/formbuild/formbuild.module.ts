import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormbuildPageRoutingModule } from './formbuild-routing.module';
import { HelloComponent } from './hello.component';
import { FormbuildPage } from './formbuild.page';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    FormbuildPageRoutingModule
  ],
  declarations: [FormbuildPage, HelloComponent],
  bootstrap: [AppComponent]
})
export class FormbuildPageModule {}
