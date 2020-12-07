import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cartview',
        children: [
          {
            path: '',
            loadChildren: () => import('../cartview/cartview.module').then( m => m.CartviewPageModule)
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}