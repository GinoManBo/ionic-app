import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/tabs/inicio', pathMatch: 'full' },
  { path: 'acceso', loadComponent: () => import('./paginas/acceso/acceso.page').then((m) => m.AccesoPage) },
  { path: 'lugar/:id', loadComponent: () => import('./paginas/detalle-lugar/detalle-lugar.page').then((m) => m.DetalleLugarPage) },
  { path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes) },
];
