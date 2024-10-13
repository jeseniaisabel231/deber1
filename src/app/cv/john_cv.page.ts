import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  imports: [IonContent, IonIcon, IonHeader, IonToolbar, IonTitle],
  standalone: true,
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main class="flex sm:flex-row flex-col">
        <aside class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3">
          <div>
            <h3 class="font-extrabold">CONTACTO</h3>
            <ul class="mt-4 flex flex-col gap-2 text-sm">
              <li >+593 990123317</li>
              <li>jhonmata0427&#64;gmail.com</li>
              <li>Quito - Ecuador</li>
              <li>https://www.linkedin.com/in/jhon0427/</li>
            </ul>
          </div>
          <div class="flex flex-col ">
            <img
              src="../assets/img/perfil-John.jpg"
              class=" rounded-full mx-auto mb-10"
            />
            <h3 class="font-extrabold">SOBRE MI</h3>
            <p class="text-sm mt-4">
              Me encata el reto de resolver problemas complejos mezclando lógica
              y creatividad. Me apasiona elcontinuo aprendizaje y estoy
              constantemente explorando nuevastecnología para
              aportarsolucionesinnovadoras y optimas de software.
            </p>
          </div>
          <div>
            <h3 class="font-extrabold">HABILIDADES</h3>
            <ul class="mt-4 list-disc marker:text-[#8f845c] text-sm">
              <li class="">Java</li>
              <li>Python</li>
              <li>C#</li>
              <li>C++</li>
              <li>SQL y NoSQL</li>
              <li>JavaScript y TypeScript</li>
              <li>HTML y CSS</li>
              <li>
                Frameworks(Angular, React, Astro, Tailwind CSS,NextJS, Express,
                Spring)
              </li>
              <li>Metodología SCRUM</li>
            </ul>
          </div>
          <div>
            <h3 class="font-extrabold">IDIOMAS</h3>
            <ul class="mt-4 list-disc marker:text-[#8f845c] text-sm">
              <li>Español (nativo)</li>
              <li>Inglés(intermedio)</li>
            </ul>

          </div>
        </aside>

        <section class="w-full bg-white text-black sm:w-1/2 md:w-2/3 py-14">
          <div class="mt-12 px-14">
            <h1 class="font-bold text-4xl text-[#8f845c]">J O H N <br> M A T A</h1>
            <h2 class="font-extrabold mt-4">DESARROLLADOR FULL - STACK</h2>
          </div>
          <hr class="border-black my-8"/>
          <div class="px-14 py-8">
            <h2 class="font-extrabold mb-4">FORMACION ACADEMICA</h2>
            <strong >GRADO EN TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE </strong>
            <br>
            <span>Escuela Politécnica Nacional del Ecuador </span>
            <br>
            <span> Noviembre 2021- Presente </span>
          </div>
          <div class="px-14">
            <h2 class="font-extrabold mb-4">EXPERIENCIA</h2>
            <strong class="text-[#8f845c]">DESARROLLADOR FULL-STACK</strong>
            <br>
            <span> Netlife - Challenge Universitario </span>
            <br>
            <span> Mayo 2024 - Presente </span>
            <ul class="list-disc marker:text-[#8f845c]">
              <li>
                Implementé y administro la base de datos y API del programa con
                Spring Boot
              </li>
              <li>
                Codifique lasinterfaces y la lógica del programa en Angular
              </li>
              <li>Aplicaciónweb para cursos de capacitación empresarial</li>
            </ul>
          </div>
          <div class="px-14 mt-12">
            <h2 class="font-extrabold mb-4">PROYECTOS ACADEMICOS</h2>
            <strong class="text-[#8f845c]">APLICACION WEB</strong>
            <br>
            <span>Tienda Tenológica - Tecny </span>
            <ul class="list-disc marker:text-[#8f845c] mb-4">
              <li>
                Cree y diseñe la base de datosNoSQL que maneja el programa
              </li>
              <li>
                Codifiqué la lasinterfaces y la lógica del programa con Astro,
                React y Tailwind
              </li>
              <li>
                Trabaje en equipo como SCRUM Mastersiguiendo dicha metodología
                ágil
              </li>
            </ul>

            <strong class="text-[#8f845c] ">APLICACION DE ESCRITORIO</strong>
            <br>
            <span>Sistema deHistorial Medico - Medicare </span>
            <ul class="list-disc marker:text-[#8f845c] mb-4">
              <li>
                Use base de datos SQL para lectura y creación de los datos
              </li>
              <li>
                Implemente la funcionalidad y la interfaz gráifca con Java
              </li>
            </ul>

            <strong class="text-[#8f845c]">APLICACION MOVIL</strong>
            <br>
            <span
              >Sistema de Gesitón de Taller Automotríz - VehiCheck Express
            </span>
            <ul class="list-disc marker:text-[#8f845c]">
              <li>Codifique la aplicación multiplataforma en Flutter</li>
              <li>
                Trabaje en equipo como SCRUM Mastersiguiendo dicha metodología
                ágil
              </li>
            </ul>
          </div>
        </section>
      </main>
    </ion-content>
  `,
  styles: `ion-icon{
    color: white;
  }`,
})
export class JohnPage {}
