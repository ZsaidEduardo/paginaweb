import { Component } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
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

  public get estado_cliente() {
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



  onSubmit(): void {

  }

}
