import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `<ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="flex size-full justify-center items-center gap-8 flex-wrap">
        <article
          class="flex flex-col bg-gradient-to-b from-[#121212] via-[#1f1f1f] p-9 rounded-lg"
        >
          <img
            src="../assets/img/perfil-John.jpg"
            alt=""
            class="size-28 rounded-full relative overflow-hidden animate-neon"
          />
          <strong class="text-center m-4">John <br> Mata</strong>
          <button class="bg-blue-700 rounded-lg py-1" (click)="router.navigate(['john'])">Ver CV</button>
        </article>
        <article
          class="flex flex-col bg-gradient-to-b from-[#121212] via-[#1f1f1f] p-9 rounded-lg"
        >
          <img
            src="../assets/img/perfil-John.jpg"
            alt=""
            class="size-28 rounded-full  relative overflow-hidden animate-neon"
          />
          <strong class="text-center m-4">Isabel <br> Pazto</strong>
          <!--<button class="bg-blue-700 rounded-lg py-1"  (click)="router.navigate(['isabel'])">Ver CV</button>-->

        </article>
        <article
          class="flex flex-col bg-gradient-to-b from-[#121212] via-[#1f1f1f] p-9 rounded-lg"
        >
          <img
            src="../assets/img/perfil-Dustin.jpg"
            alt=""
            class="size-28 rounded-full  relative overflow-hidden animate-neon"
          />
          <strong class="text-center m-4">Dustin <br> Marcatoma</strong>
          <button class="bg-blue-700 rounded-lg py-1"  (click)="router.navigate(['dustin'])">Ver CV</button>

        </article>
      </div>
    </ion-content> `,
})
export class HomePage {
  constructor(public router: Router) {}
}
