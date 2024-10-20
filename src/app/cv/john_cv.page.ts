import { Component } from '@angular/core';
import {
  IonHeader,
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
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { MenuComponent } from '../components/menu.component';

@Component({
  imports: [
    IonContent,
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
    MenuComponent,
    IonList,
    IonLabel,
  ],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Curriculum Vitae de John Mata </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <main id="menuBar" class="flex sm:flex-row flex-col">
        <aside
          class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3 sm:border-r-4 sm:border-b-0 border-b-4 border-[#121212]"
        >
          <ion-list class="rounded-lg p-4">
            <h3 class="font-extrabold uppercase tracking-widest mb-2">
              Contacto
            </h3>
            <ion-item>
              <svg
                class="size-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  class="dark:stroke-white stroke-black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m14.3 16 1.4-1.4a2.2 2.2 0 0 1 3 0l1.6 1.6a2.2 2.2 0 0 1 0 3.1l-.7.7a3.3 3.3 0 0 1-3.8.6A29 29 0 0 1 3.3 8.2 3.3 3.3 0 0 1 4 4.4l.7-.8a2.2 2.2 0 0 1 3.1 0l1.6 1.6a2.2 2.2 0 0 1 0 3.1L8.1 9.8A30 30 0 0 0 11 13l3.3 3h0Z"
                /></svg
              ><a class="text-sm" href="tel:+593990123317">+593 990123317</a>
            </ion-item>
            <ion-item>
              <svg
                class="size-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g
                  class="dark:stroke-white stroke-black"
                  stroke-linecap="round"
                  stroke-width="2"
                >
                  <path
                    stroke-linejoin="round"
                    d="m4 7 6.2 4.7a3 3 0 0 0 3.6 0L20 7"
                  />
                  <rect width="18" height="14" x="3" y="5" rx="2" />
                </g>
              </svg>
              <a class="text-sm" href="mailto:jhonmata0427@gmail.com"
                >jhonmata0427&#64;gmail.com</a
              >
            </ion-item>
            <ion-item>
              <svg
                class="size-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g
                  class="dark:stroke-white stroke-black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M12 21c3.5-3.6 7-6.8 7-10.8 0-4-3.1-7.2-7-7.2s-7 3.2-7 7.2 3.5 7.2 7 10.8Z"
                  />
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                </g>
              </svg>
              <p class="text-sm">Quito - Ecuador</p>
            </ion-item>
            <ion-item>
              <svg
                class="size-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  class="dark:fill-white fill-black"
                  d="M18.7 4H5.4A1.3 1.3 0 0 0 4 5.2v13.4A1.4 1.4 0 0 0 5.4 20h13.3a1.3 1.3 0 0 0 1.3-1.4V5.2A1.2 1.2 0 0 0 18.7 4ZM9 17.3H6.7v-7H9v7ZM7.9 9.1A1.2 1.2 0 0 1 6.7 8a1.2 1.2 0 0 1 1.2-1.2A1.2 1.2 0 0 1 9.1 8 1.2 1.2 0 0 1 8 9.1Zm9.4 8.2H15v-3.9c0-.9-.3-1.5-1.2-1.5a1.2 1.2 0 0 0-1.1.8l-.1.6v4h-2.3v-7h2.3v1a2.3 2.3 0 0 1 2-1.3c1.6 0 2.7 1 2.7 3.1v4.2Z"
                />
              </svg>
              <a
                class="text-sm"
                href="https://www.linkedin.com/in/jhon0427/"
                target="_blank"
                >https://www.linkedin.com/in/jhon0427/</a
              >
            </ion-item>
          </ion-list>
          <div class="flex flex-col ">
            <img
              src="../assets/img/perfil-John.jpg"
              class="rounded-full mx-auto mb-10 border-8"
            />
            <h3 class="font-extrabold uppercase tracking-widest">Sobre mí</h3>
            <p class="text-sm mt-4">
              Tengo una curiosidad incesante por conocer cómo funcionan las
              cosas. Me encanta el reto de resolver problemas complejos
              mezclando lógica y creatividad. Me apasiona el continuo
              aprendizaje y estoy constantemente explorando nuevas tecnologíaw
              para aportar soluciones innovadoras.
            </p>
          </div>
          <div>
            <h3 class="font-extrabold uppercase tracking-widest">
              Habilidades
            </h3>
            <ul class="mt-4 list-disc marker:text-[#706643] text-sm ml-4">
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
              <li>C++</li>
              <li>SQL y NoSQL</li>
              <li>JavaScript y TypeScript</li>
              <li>HTML y CSS</li>
              <li>
                Frameworks (Angular, React, Astro, Tailwind CSS, NextJS,
                Express, Spring)
              </li>
              <li>Flutter</li>
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
              John
              <br />
              Mata
            </h1>
            <h2 class="font-extrabold mt-4 uppercase tracking-widest">
              Desarrollador Full-Stack
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
              >Desarrollador Full-Stack</strong
            >
            <br />
            <small class="font-semibold">
              Netlife - Challenge Universitario <br />
              Mayo 2024 - Presente</small
            >
            <ul class="list-disc marker:text-[#706643] ml-8 mt-2">
              <li>
                Implementé y administro la base de datos y API del programa con
                Spring Boot
              </li>
              <li>
                Codifique las interfaces y la lógica del programa en Angular
              </li>
              <li>Aplicación web para cursos de capacitación empresarial</li>
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
export class JohnPage {
  public projects = [
    {
      title: 'Aplicación Web',
      description: 'Tienda Tecnológica - Tecny',
      tasks: [
        'Creé y diseñe la base de datos NoSQL que maneja el programa',
        'Codifiqué las interfaces y la lógica del programa con Astro, React y Tailwind',
        'Trabaje en equipo como SCRUM Master siguiendo dicha metodología ágil',
      ],
    },
    {
      title: 'Aplicación de Escritorio',
      description: 'Sistema de Historial Médico - Medicare',
      tasks: [
        'Use base de datos SQL para lectura y creación de los datos',
        'Implemente la funcionalidad y la interfaz gráfica con Java',
      ],
    },
    {
      title: 'Aplicación Móvil',
      description:
        'Sistema de Gestión de Taller Automotriz - VehiCheck Express',
      tasks: [
        'Codifique la aplicación multiplataforma en Flutter',
        'Trabaje en equipo como SCRUM Master siguiendo dicha metodología ágil',
      ],
    },
  ];
}
