import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements  OnInit {


  isVisible: boolean = false;

  constructor( private _cargarScript: CargarScriptService) {



      _cargarScript.carga(["configuraciones_idiomas/idioma_login"]);
      _cargarScript.carga(["altura_login"]);
    

   /*  this.router.events.subscribe((event: any) => {
      if (event.url && (event.url === '/signup')) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    }); */
  }

  ngOnInit() {
    // La animación comienza cuando el componente se inicializa
    this.isVisible = true;
  }

}
