import { Routes } from '@angular/router';
import { JohnPage } from './cv/john_cv.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'john',
    component: JohnPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
