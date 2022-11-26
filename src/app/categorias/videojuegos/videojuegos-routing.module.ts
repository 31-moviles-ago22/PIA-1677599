import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideojuegosPage } from './videojuegos.page';

const routes: Routes = [
  {
    path: '',
    component: VideojuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideojuegosPageRoutingModule {}
