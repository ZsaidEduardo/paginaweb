import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { CargarScriptService } from '../../../services/cargar-script.service';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent  {

  isVisible: boolean = true;
  
  private hiddenRoutes = ['/login', '/signup' , '/booking','/forms', '/book'];

  constructor( private router: Router, private _cargarScript: CargarScriptService) {

    _cargarScript.carga(["pantallaDeCarga"]);
    _cargarScript.carga(["header"]);
    _cargarScript.carga(["video_portada"]);
    _cargarScript.carga(["idioma_banderas"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_header"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_index"]);
    _cargarScript.carga(["configuraciones_idiomas/idioma_footer"]);
   

  }


    ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isVisible = !this.hiddenRoutes.includes(event.urlAfterRedirects);
        }
      });
    }

    
  

  loguearse():void{
    this.router.navigate(['login']);
  }
  
  registrer():void{
    this.router.navigate(['signup']);
  }

  reserva():void{
    this.router.navigate(['book']);
  }


}
