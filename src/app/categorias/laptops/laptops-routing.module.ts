import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptopsPage } from './laptops.page';

const routes: Routes = [
  {
    path: '',
    component: LaptopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptopsPageRoutingModule {}
