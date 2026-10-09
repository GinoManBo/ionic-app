import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'inicio', loadComponent: () => import('../paginas/inicio/inicio.page').then((m) => m.InicioPage) },
      { path: 'mapa', loadComponent: () => import('../paginas/mapa/mapa.page').then((m) => m.MapaPage) },
      { path: 'explorar', loadComponent: () => import('../paginas/explorar/explorar.page').then((m) => m.ExplorarPage) },
      { path: 'plan', loadComponent: () => import('../paginas/plan/plan.page').then((m) => m.PlanPage) },
      { path: 'perfil', loadComponent: () => import('../paginas/perfil/perfil.page').then((m) => m.PerfilPage) },
      { path: '', redirectTo: '/tabs/inicio', pathMatch: 'full' },
    ],
  },
];
