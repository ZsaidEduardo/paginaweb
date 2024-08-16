import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CargarScriptService } from '../../services/cargar-script.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  

  bookingForm!: FormGroup;
  constructor(private _cargarScript: CargarScriptService ,private fb: FormBuilder ) {

    _cargarScript.carga(["configuraciones_idiomas/idioma_booking"]);
    _cargarScript.carga(["booking__extras__configuracion"]);
    _cargarScript.carga(["booking__configuracion"]);
    _cargarScript.carga(["calendario"]);
    _cargarScript.carga(["politica_ventanasModales"]);
    _cargarScript.carga(["id_pedido"]);
   
  }
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', [Validators.required]],
      turno: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log('Formulario Enviado:', this.bookingForm.value);
    }

    else {
      
    }
  }


}
