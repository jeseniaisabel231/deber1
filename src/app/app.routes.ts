import { Routes } from '@angular/router';
import { JohnPage } from './cv/john_cv.page';
import { DusPage } from './cv/dustin_cv.page';

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
    path: 'isabel',
    loadComponent: ()=> import ('./cv/isabel_cv.page').then((m)=> m.IsabelPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
