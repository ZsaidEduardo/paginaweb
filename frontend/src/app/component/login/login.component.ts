import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;
  email: string = '';
  password: string = '';
  

  constructor(  private _cargarScript: CargarScriptService , private loginService:LoginService,
    private router: Router) {

    _cargarScript.carga(["configuraciones_idiomas/idioma_login"]);
    _cargarScript.carga(["altura_login"]);

    


  }

  ngOnInit() {
    // La animación comienza cuando el componente se inicializa
    this.isVisible = true;
  }


  
    
  

 

}
