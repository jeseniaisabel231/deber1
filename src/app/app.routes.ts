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
<<<<<<< HEAD
    path: 'isabel',
    loadComponent: ()=> import ('./cv/isabel_cv.page').then((m)=> m.IsabelPage)
  },
=======
    path: 'dustin',
    component: DusPage,
  },
  // {
  //   path: 'isabel',
  //   component: IsabelPage,
  // },
>>>>>>> 5cb14eab108d99396e6165fd7528dfe2344f40ca
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
