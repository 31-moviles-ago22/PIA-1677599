import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartwatchesPageRoutingModule } from './smartwatches-routing.module';

import { SmartwatchesPage } from './smartwatches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartwatchesPageRoutingModule
  ],
  declarations: [SmartwatchesPage]
})
export class SmartwatchesPageModule {}
