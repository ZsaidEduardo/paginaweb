import { Component, OnInit , inject} from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/BookingModel';
import { BookingServicesService } from '../../services/booking-services.service';

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent implements OnInit {

  bookingForm!: FormGroup;

  bookingService = inject(BookingServicesService)


  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', [Validators.required]],
      anio: ['', Validators.required],
      color: ['', Validators.required],
      servicio_extra: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      apellido_cliente: ['', Validators.required],
      email: ['', Validators.required],
      telfono_cliente: ['', Validators.required],
      direccion_cliente: ['', Validators.required],
      ciudad_cliente: ['', Validators.required],
      estado_cliente: ['', Validators.required],
      codigo_postal: ['', Validators.required],
      peticion_cliente: ['', Validators.required],
      descripcion_servicio: ['', Validators.required],
      dirt_charges: ['', Validators.required],
      la_tos: ['', Validators.required],
      fecha_servicio: ['', Validators.required],
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

  }

  getExtra(extraName: string): void {
    this.bookingForm.get('servicio_extra')?.setValue(extraName);
  }

  public get marca() {
    return this.bookingForm.get('marca');
  }
  public get modelo() {
    return this.bookingForm.get('modelo');
  }

  public get anio() {
    return this.bookingForm.get('anio');
  }

  public get color() {
    return this.bookingForm.get('color');
  }

  public get servicio_extra() {
    return this.bookingForm.get('servicio_extra');
  }

  public get nombre() {
    return this.bookingForm.get('nombre');
  }

  public get fecha() {
    return this.bookingForm.get('fecha');
  }

  public get nombre_cliente() {
    return this.bookingForm.get('nombre_cliente');
  }

  public get apellido_cliente() {
    return this.bookingForm.get('apellido_cliente');
  }

  public get email() {
    return this.bookingForm.get('email');
  }

  public get telfono_cliente() {
    return this.bookingForm.get('telfono_cliente');
  }

  public get direccion_cliente() {
    return this.bookingForm.get('direccion_cliente');
  }

  public get ciudad_cliente() {
    return this.bookingForm.get('ciudad_cliente');
  }

  public get estado_servicio() {
    return this.bookingForm.get('estado_cliente');
  }

  public get codigo_postal() {
    return this.bookingForm.get('codigo_postal');
  }

  public get peticion_cliente() {
    return this.bookingForm.get('peticion_cliente');
  }

  public get descripcion_servicio() {
    return this.bookingForm.get('descripcion_servicio');
  }

  public get dirt_charges() {
    return this.bookingForm.get('dirt_charges');
  }

  public get la_tos() {
    return this.bookingForm.get('la_tos');
  }

  public get fecha_servicio() {
    return this.bookingForm.get('fecha_servicio');
  }



booking = new Booking();
accion: string = "new";


bookingData = {
  marca: this.marca,
  modelo: this.modelo,
  anio: this.anio,
  color: this.color,
  servicio_extra: this.servicio_extra,
  nombre: this.nombre,
  fecha: this.fecha,
  nombre_cliente: this.nombre_cliente,
  apellido_cliente: this.apellido_cliente,
  email: this.email,
  telefono_cliente: this.telfono_cliente,
  direccion_cliente: this.direccion_cliente,
  ciudad_cliente: this.ciudad_cliente,
  estado_servico: this.estado_servicio,
  codigo_postal_cliente: this.codigo_postal,
  peticion_cliente: this.peticion_cliente,
  descripcion_servicio: this.descripcion_servicio,
  dirt_charges: false,
  acepto_veicle: false,
  la_tos: null,
  fecha_servicio: this.fecha_servicio
};

  constructor(private _cargarScript: CargarScriptService ,private fb: FormBuilder,
    private router:Router,private activatedRoute: ActivatedRoute, private _bookingService: BookingServicesService
   ) {



      _cargarScript.carga(["configuraciones_idiomas/idioma_booking"]);
    //agregado
    this.bookingForm = this.fb.group({
      fecha: [''],
      hora: [''],
      turno: ['']
    });
    //

    _cargarScript.carga(["pruebas"]);


  }


  postBookingData(): void {
    if (this.bookingForm.valid) {
      // Maneja el envío del formulario aquí

      this.bookingService.postBooking(this.bookingData);
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
