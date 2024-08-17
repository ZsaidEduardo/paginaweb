import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Booking } from '../../model/booking';
import { CargarScriptService } from '../../services/cargar-script.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServicesService } from '../../services/booking-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-facture',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './booking-facture.component.html',
  styleUrl: './booking-facture.component.css'
})
export class BookingFactureComponent {

  bookingForm!: FormGroup;

  // Propiedades para el resumen
  /* clienteNombre: string = '';
  direccion: string = '';
  fecha: string = '';
  hora: string = '';
  marca: string = '';
  modelo: string = '';
  anio: number | null = null;
  color: string = '';
  extras: string[] = [];
  subtotal: number = 0;
  totalEstimado: number = 0; */
  
  booking = new Booking();
  accion: string = "new";


  

  constructor(private _cargarScript: CargarScriptService ,private fb: FormBuilder,
    private router:Router,private activatedRoute: ActivatedRoute, private _bookingService: BookingServicesService
   ) {

    //agregado
    this.bookingForm = this.fb.group({
      fecha: [''],
      hora: [''],
      turno: ['']
    });
    //

    _cargarScript.carga(["pruebas"]);
    
   
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      turno: ['', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        /* this.iniciarLocales(); */
      } else {
        this.accion = "update";
       /*  this.cargarbooking( params['id'] ); */
        
      }
    })
    /* this.loadPreviousData(); */
  }


  onSubmit(): void {
    if (this.bookingForm.valid) {
      // Maneja el envío del formulario aquí
      console.log(this.bookingForm.value);
    }
  }
  
 

 /*  loadPreviousData() { */
    // Aquí deberías obtener los datos de los formularios anteriores
    // Esto es solo un ejemplo estático, adapta según tu lógica
    /* this.clienteNombre = 'John Doe';
    this.direccion = '1234 Elm Street';
    this.fecha = '2024-08-01';
    this.hora = '15:00';
    this.marca = 'Toyota';
    this.modelo = 'Corolla';
    this.anio = 2022;
    this.color = 'Rojo';
    this.extras = ['ArmorAll Treatment', 'Pasta Wax'];
    this.subtotal = 529.00;
    this.totalEstimado = 529.00; */
 /*  } */

  enviarFormulario() {
    // Lógica para enviar el formulario
    console.log('Formulario enviado');
  }

  enviar():void{
    this.router.navigate(['home'])
  }

    /* CREAR FACTURA BOOKING */

    crearBooking():void{
      this._bookingService.postBooking(this.booking).subscribe(
        (result) =>{
          console.log(result)
          this.router.navigate(['home']);
        }, error => {
          alert("Error: " + error);
        });
      
    }
    
    

}
