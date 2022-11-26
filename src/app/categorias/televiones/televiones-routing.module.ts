import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelevionesPage } from './televiones.page';

const routes: Routes = [
  {
    path: '',
    component: TelevionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelevionesPageRoutingModule {}
