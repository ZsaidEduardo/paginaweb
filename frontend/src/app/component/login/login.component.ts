import { Component } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(  private _cargarScript: CargarScriptService) {

    _cargarScript.carga(["configuraciones_idiomas/idioma_login"]);
    _cargarScript.carga(["altura_login"]);
  }


}
