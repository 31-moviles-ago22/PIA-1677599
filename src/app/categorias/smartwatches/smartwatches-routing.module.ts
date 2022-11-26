import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartwatchesPage } from './smartwatches.page';

const routes: Routes = [
  {
    path: '',
    component: SmartwatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartwatchesPageRoutingModule {}
