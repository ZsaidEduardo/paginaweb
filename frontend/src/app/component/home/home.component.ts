import { Component, ElementRef, ViewChild } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /* @ViewChild('videoPortada') videoElement!: ElementRef<HTMLVideoElement>; */


  constructor(private _cargarScript: CargarScriptService) {

    _cargarScript.carga(["pantallaDeCarga"]);
    _cargarScript.carga(["video_portada"]);
    _cargarScript.carga(["idioma_banderas"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_header"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_unete"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_footer"]);
   
  }

   ngAfterViewInit() {
    // Crear una instancia del IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    // Observar todos los elementos con la clase .galeria__img
    document.querySelectorAll('.galeria__img').forEach(img => {
      observer.observe(img);
    });

  }
}
