import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  isVisible: boolean = true;

  constructor( private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url && (event.url === '/signup')) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    });
  }

  loguearse():void{
    this.router.navigate(['signup']);
  }

}
