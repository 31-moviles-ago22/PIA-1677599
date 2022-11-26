import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelularesPage } from './celulares.page';

const routes: Routes = [
  {
    path: '',
    component: CelularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelularesPageRoutingModule {}
