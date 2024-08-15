import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
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
    this.sections.forEach((section, i) => {
      const sectionElement = document.getElementById(`section-${section}`);
      const circleElement = document.getElementById(`circle-${section}`);
      if (sectionElement) {
        sectionElement.style.display = i === index ? 'block' : 'none';
      }
      if (circleElement) {
        circleElement.classList.toggle('booking__state__circle--active', i === index);
      }
    });

    const progressBar = document.querySelector('.booking__line__progress') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = `${(index / (this.sections.length - 1)) * 100}%`;
    }
  }

  validateCurrentSection(): boolean {
    const currentSectionElement = document.getElementById(`section-${this.sections[this.currentSection]}`);
    if (currentSectionElement) {
      const inputs = currentSectionElement.querySelectorAll('input[required], select[required]');
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i] as HTMLInputElement;
        if (!input.value) {
          alert('Por favor, complete todos los campos requeridos.');
          return false;
        }
      }
    }
    return true;
  }

  nextSection(event: Event): void {
    event.preventDefault();
    if (this.validateCurrentSection() && this.currentSection < this.sections.length - 1) {
      this.currentSection++;
      this.showSection(this.currentSection);
    }
  }
}
