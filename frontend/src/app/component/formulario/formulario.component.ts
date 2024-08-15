import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor( private _cargarScript: CargarScriptService) {

    
    _cargarScript.carga(["validacion_formulario_unete"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_formularioUnete"]);
    
   
  }
  

}
