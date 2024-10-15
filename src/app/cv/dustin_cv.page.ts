import { Component } from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';

import { MenuComponent } from '../components/menu.component';

@Component({
  imports: [
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    MenuComponent
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Curriculum Vitae de Dustin Marcatoma </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <main id="barraNavegaciónCV" class="flex sm:flex-row flex-col">
        <aside
          class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3  border-[#121212] bg-orange-300"
        >
          <div>
            <h3 class="font-extrabold uppercase tracking-widest">Contacto</h3>
            <ul
              class="mt-4 flex flex-col gap-1 text-sm list-disc marker:text-[#706643] ml-4"
            >
              <li><a href="tel:+593979008923">+593 979008923</a></li>
              <li>
                <a href="mailto:dustin04ms@gmail.com"
                  >dustin04ms&#64;gmail.com</a
                >
              </li>
              <li>Quito - Ecuador</li>
              <li>
                <a href="https://www.linkedin.com/in/dustin-marcatoma-8568422ab/" target="_blank"
                  >https://www.linkedin.com/in/dustin-marcatoma-8568422ab/</a
                >
              </li>
            </ul>
          </div>
          <div class="flex flex-col ">
            <img
              src="../assets/img/perfil-Dustin.jpg"
              class="rounded-full mx-auto mb-10 border-8"
            />
            <h3 class="font-extrabold uppercase tracking-widest">Sobre mí</h3>
            <p class="text-sm mt-4">
              Soy un chico  apasionado por la tecnología y la programación. Me gusta ser bastante reservado y tranquilo,  pero cuando me gusta algo, me dedico a ello con todo mi corazón. Me gusta mucho  la música, jugar videojuegos, el anime japonés, leer mangas, ver series, peliculas y jugar volley.
            </p>
          </div>
          <div>
            <h3 class="font-extrabold uppercase tracking-widest">
              Habilidades
            </h3>
            <ul class="mt-4 list-disc marker:text-[#706643] text-sm ml-4">
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>SQL y NoSQL</li>
              <li>JavaScript</li>
              <li>HTML y CSS</li>
              <li>
                Frameworks (React, Tailwind CSS,
                Express, Ionic)
              </li>
              <li>Metodología SCRUM</li>
            </ul>
          </div>
          <ion-accordion-group>
            <ion-accordion>
              <ion-item color="dark" slot="header">
                <h3 class="font-extrabold uppercase tracking-widest">
                  Idiomas
                </h3>
              </ion-item>
              <div class="ion-padding" slot="content">
                <ul class="list-disc marker:text-[#706643] text-sm ml-4">
                  <li>Español (nativo)</li>
                  <li>Inglés (intermedio)</li>
                  <li>Japonés (basico)</li>
                </ul>
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </aside>

        <section class="w-full bg-white text-black sm:w-1/2 md:w-2/3 py-14">
          <div class="mt-12 px-14">
            <h1
              class="font-bold text-4xl text-[#706643] uppercase tracking-[0.75rem]"
            >
              Dustin
              <br />
              Marcatoma
            </h1>
            <h2 class="font-extrabold mt-4 uppercase tracking-widest">
              Desarrollador Junior
            </h2>
          </div>
          <hr class="border-black my-8" />

          <ion-card class="mx-10 mt-10">
            <ion-card-header>
              <ion-card-title
                ><h2 class="font-extrabold mb-4 uppercase tracking-widest">
                  Formación Académica
                </h2></ion-card-title
              >
            </ion-card-header>

            <ion-card-content>
              <div>
                <strong class="text-[#706643] uppercase md:tracking-widest"
                  >Grado en Tecnología Superior en Desarrollo de
                  Software</strong
                >
                <br />
                <span class="text-sm"
                  >Escuela Politécnica Nacional del Ecuador <br />
                  Noviembre 2021- Presente
                </span>
              </div>
            </ion-card-content>
          </ion-card>

          <div class="px-14 py-8">
            <h2 class="font-extrabold mb-4 uppercase tracking-widest">
              Experiencia
            </h2>
            <strong class="text-[#706643] uppercase tracking-widest"
              >Desarrollador Junior</strong
            >
            <br />
            <small class="font-semibold">
              Sovos - Pasantías <br />
              Junio 2024 - Presente</small
            >
            <ul class="list-disc marker:text-[#706643] ml-8 mt-2">
              <li>
                Gestión de servidores  y bases de datos
              </li>
              <li>
                Migración  de aplicaciones a la nube
              </li>
              <li>Computación en la nube por AWS</li>
            </ul>
          </div>
          <div class="px-14">
            <h2 class="font-extrabold mb-4 uppercase tracking-widest">
              Proyectos Académicos
            </h2>

            @for (project of projects; track $index) {
            <strong class="text-[#706643] uppercase tracking-widest">{{
              project.title
            }}</strong>
            <br />
            <small class="font-semibold">{{ project.description }}</small>
            <ul class="list-disc marker:text-[#706643] ml-8 mt-2 mb-4">
              @for (task of project.tasks; track $index) {
              <li>{{ task }}</li>
              }
            </ul>
            }
          </div>
        </section>
      </main>
    </ion-content>
  `,
})
export class DusPage {
  public projects = [
    {
      title: 'Aplicación de Escritorio',
      description: 'Sistema de Historial Médico - Medicare',
      tasks: [
        'Use base de datos SQL para lectura y creación de los datos',
        'Implemente la funcionalidad y la interfaz gráfica con Java',
      ],
    },
    {
        title: 'Aplicación web para una tienda de lentes',
        description: 'Sistema de gestión de inventario y ventas - OpticStore',
        tasks: [
            'Creación del Backend y Frontend  con Node.js y React de un sistema web priorizado en la exposición y venta de productos de una tienda  de lentes',
            'Implementación de la funcionalidad de autenticación y autorización de usuarios con JWT',
        ]
    }
  ];
}
