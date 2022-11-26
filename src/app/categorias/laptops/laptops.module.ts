import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopsPageRoutingModule } from './laptops-routing.module';

import { LaptopsPage } from './laptops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopsPageRoutingModule
  ],
  declarations: [LaptopsPage]
})
export class LaptopsPageModule {}
