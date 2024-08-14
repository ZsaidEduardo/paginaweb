import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent  {

  isVisible: boolean = true;
  
  private hiddenRoutes = ['/login', '/signup' , '/booking'];

  constructor( private router: Router) {}


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
    this.router.navigate(['booking']);
  }


}
