import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-join-up',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './join-up.component.html',
  styleUrl: './join-up.component.css'
})
export class JoinUpComponent {

  constructor(private router: Router,private _cargarScript: CargarScriptService){
    
    _cargarScript.carga(["header"]);
    _cargarScript.carga(["pantallaDeCarga"]);
    _cargarScript.carga(["idioma_banderas"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_header"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_unete"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_footer"]);
  }
  


  formulario(){
    this.router.navigateByUrl('/forms');
  }


}
