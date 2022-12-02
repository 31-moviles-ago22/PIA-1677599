import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'celulares',
    loadChildren: () => import('./categorias/celulares/celulares.module').then( m => m.CelularesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'laptops',
    loadChildren: () => import('./categorias/laptops/laptops.module').then( m => m.LaptopsPageModule)
  },
  {
    path: 'smartwatches',
    loadChildren: () => import('./categorias/smartwatches/smartwatches.module').then( m => m.SmartwatchesPageModule)
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./categorias/videojuegos/videojuegos.module').then( m => m.VideojuegosPageModule)
  },
  {
    path: 'televiones',
    loadChildren: () => import('./categorias/televiones/televiones.module').then( m => m.TelevionesPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('./categorias/componentes/componentes.module').then( m => m.ComponentesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
