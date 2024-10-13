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
  ],
  standalone: true,
  template: `
    <ion-menu contentId="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú de Acciones</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"></ion-content>
    </ion-menu>

    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> Curriculum Vitae de John Mata </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <main id="main-content" class="flex sm:flex-row flex-col">
        <aside
          class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3 sm:border-r-4 sm:border-b-0 border-b-4 border-[#121212]"
        >
          <div>
            <h3 class="font-extrabold uppercase tracking-widest">Contacto</h3>
            <ul
              class="mt-4 flex flex-col gap-1 text-sm list-disc marker:text-[#706643] ml-4"
            >
              <li><a href="tel:+593990123317">+593 990123317</a></li>
              <li>
                <a href="mailto:jhonmata0427@gmail.com"
                  >jhonmata0427&#64;gmail.com</a
                >
              </li>
              <li>Quito - Ecuador</li>
              <li>
                <a href="https://www.linkedin.com/in/jhon0427/" target="_blank"
                  >https://www.linkedin.com/in/jhon0427/</a
                >
              </li>
            </ul>
          </div>
          <div class="flex flex-col ">
            <img
              src="../assets/img/perfil-John.jpg"
              class="rounded-full mx-auto mb-10 border-8"
            />
            <h3 class="font-extrabold uppercase tracking-widest">Sobre mí</h3>
            <p class="text-sm mt-4">
              Tengo una curiosidad incesante por cómo funcionan las cosas. Me
              encanta el reto de resolver problemas complejos mezclando lógica y
              creatividad. Me apasiona el continuo aprendizaje y estoy
              constantemente explorando nuevas tecnologíaw para aportar
              soluciones innovadoras.
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
