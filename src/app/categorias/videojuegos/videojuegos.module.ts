import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideojuegosPageRoutingModule } from './videojuegos-routing.module';

import { VideojuegosPage } from './videojuegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideojuegosPageRoutingModule
  ],
  declarations: [VideojuegosPage]
})
export class VideojuegosPageModule {}
