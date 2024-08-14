import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-up',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './join-up.component.html',
  styleUrl: './join-up.component.css'
})
export class JoinUpComponent {

  constructor(private router: Router){}


  formulario(){
    this.router.navigateByUrl('/forms');
  }


}
