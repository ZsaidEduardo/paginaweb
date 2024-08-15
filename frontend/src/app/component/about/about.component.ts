import { Component } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(  private _cargarScript: CargarScriptService) {

    _cargarScript.carga(["pantallaDeCarga"]);
    _cargarScript.carga(["header"]);
    _cargarScript.carga(["idioma_banderas"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_header"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_nosotros"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_footer"]);
  }

}
