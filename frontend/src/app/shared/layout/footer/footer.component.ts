import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isVisible: boolean = true;
  private hiddenRoutes = ['/login', '/signup', '/booking','/forms','/prueba'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica si la URL de navegación actual está en la lista de rutas ocultas
        this.isVisible = !this.hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}


