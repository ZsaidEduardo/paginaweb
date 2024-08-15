import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  sections = ['carro', 'extras', 'fecha-hora', 'detalles', 'resumen'];
  currentSection = 0;

  constructor() { }

  ngOnInit(): void {
    this.showSection(0);
  }

  showSection(index: number): void {
    // Implementa la lógica para mostrar la sección
    // Puedes usar ViewChild o manipular el DOM directamente si es necesario
  }

  validateCurrentSection(): boolean {
    // Implementa la lógica de validación
    return true; // Cambia esto según tu lógica de validación
  }

  nextSection(): void {
    if (this.validateCurrentSection() && this.currentSection < this.sections.length - 1) {
      this.currentSection++;
      this.showSection(this.currentSection);
    }
  }
}
