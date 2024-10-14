import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'john',
    loadComponent: ()=> import ('./cv/john_cv.page').then((m)=> m.JohnPage)
  },
  {
    path: 'isabel',
    loadComponent: ()=> import ('./cv/isabel_cv.page').then((m)=> m.IsabelPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
