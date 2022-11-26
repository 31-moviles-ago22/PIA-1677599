import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelularesPageRoutingModule } from './celulares-routing.module';

import { CelularesPage } from './celulares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelularesPageRoutingModule
  ],
  declarations: [CelularesPage]
})
export class CelularesPageModule {}
