import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonApp,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],

  template: `
    <ion-app>
  <ion-menu contentId="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menú de Acciones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button (click)="router.navigate(['john'])"> CV John </ion-button>
      <ion-button (click)="router.navigate(['dustin'])"> CV Dustin </ion-button>
      <ion-button (click)="router.navigate(['isabel'])"> CV Isabel </ion-button>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>
</ion-app>

  `,
})
export class AppComponent {
  constructor( public router : Router ) {}
}
