import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelevionesPageRoutingModule } from './televiones-routing.module';

import { TelevionesPage } from './televiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelevionesPageRoutingModule
  ],
  declarations: [TelevionesPage]
})
export class TelevionesPageModule {}
