import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
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
        <aside
          class="flex flex-col gap-10 p-14 w-full sm:w-1/2 md:w-1/3 bg-gradient-to-b from-[#e1d2ab] via-[#ffffff] to-[#cccccc] text-black"
        >
          <div>
            <h3 class="font-extrabold text-[#6f6748]">CONTACTO</h3>
            <div class="pt-2">
              <hr class="border-[#6f6748] w-14 border-2 rounded-full" />
            </div>
            <ul class="mt-4 flex flex-col gap-2 text-sm">
              <li>
                0990746328
              </li>
              <li>jesenia.pazto&#64;epn.edu.ec</li>
              <li>Quito - Ecuador</li>
            </ul>
          </div>
          <div class="flex flex-col ">
            <img
              src="../assets/img/perfil-Isabel.jpg"
              class=" rounded-full mx-auto mb-10"
            />
            <h3 class="font-extrabold text-[#8f845c]">ACERCA DE MI</h3>
            <div class="pt-2">
              <hr class="border-[#6f6748] w-14 border-2 rounded-full" />
            </div>
            <p class="text-sm mt-4">
              Como estudiante de Desarrollo de Software, poseo habilidades en
              diseño IJX/IJI. Estoy decidida a enfrentar nuevos retos y aprender
              nuevas tecnologías. Además, me considero una persona responsable y
              aplicada.
            </p>
          </div>
          <div>
            <h3 class="font-extrabold text-[#8f845c]">HABILIDADES</h3>
            <div class="pt-2">
              <hr class="border-[#6f6748] w-14 border-2 rounded-full" />
            </div>
            <ul class="mt-4 list-disc marker:text-[#8f845c] text-sm">
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>HTML y CSS</li>
              <li>Diseño UX/UI: Prototipado y diseño de interfaces</li>
              <li>Control de versiones: Git, GitHub</li>
            </ul>
          </div>
          <div>
            <h3 class="font-extrabold text-[#8f845c]">IDIOMAS</h3>
            <div class="pt-2">
              <hr class="border-[#6f6748] w-14 border-2 rounded-full" />
            </div>
            <ul class="mt-4 list-disc marker:text-[#8f845c] text-sm">
              <li>Español (nativo)</li>
              <li>Inglés(intermedio)</li>
            </ul>
          </div>
        </aside>

        <section class="w-full bg-white text-black sm:w-1/2 md:w-2/3 py-14">
          <div class="mt-12 px-14">
            <h1 class="font-bold text-4xl text-[#736b4d]">
              ISABEL <br />
              PAZTO
            </h1>
            <h2 class="font-extrabold mt-4 text-[#7d7d62]">
              DESARROLLADORA FRONTEND
            </h2>
          </div>
          <hr class="border-[#efe7d1] my-8 border-2" />
          <div class="px-14 py-8">
            <h2 class="font-extrabold mb-4 text-[#7d7d62]">
              FORMACION ACADEMICA
            </h2>

            <strong>ESCUELA POLITÉCNICA NACIONAL </strong>
            <ul>
              <li>Tecnología Superior en Desarrollo de Software</li>
              <li>Cursando ultimos niveles</li>
            </ul>
            <br />

            <strong>INSTITUCIÓN EDUCATIVA FISCAL SUCRE </strong>
            <ul>
              <li>Bachiller Técnico en Electromecánica Automotriz</li>
              <li>2016-2021</li>
            </ul>
            <br />
          </div>
          <div class="px-14">
            <h2 class="font-extrabold mb-4 text-[#7d7d62]">EXPERIENCIA</h2>
            <strong class="text-black">DESARROLLADORA FROTEND</strong>
            <br />
            <span> Netlife - Challenge Universitario </span>
            <br />
            <span> Mayo 2024 - Presente </span>
            <ul class="list-disc marker:text-[#8f845c]">
              <li>Aplicaciónweb para cursos de capacitación empresarial</li>
            </ul>
          </div>
          <div class="px-14 mt-12">
            <h2 class="font-extrabold mb-4 text-[#7d7d62]">
              PROYECTOS ACADEMICOS
            </h2>
            <strong class="text-black">APLICACION WEB</strong>
            <br />
            <span>Tienda Tenológica - Tecny </span>
            <ul class="list-disc marker:text-[#8f845c] mb-4">
              <li>
                Cree y diseñe las interfaces de cada pantalla del sitio web.
              </li>
            </ul>

            <strong class="text-black ">APLICACION DE ESCRITORIO</strong>
            <br />
            <ul class="list-disc marker:text-[#8f845c] mb-4">
              <li>Sistema de Historial Medico - Medicare</li>
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
export class IsabelPage {}
