import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './formulario-eventos.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class FormularioEventosComponent {
  confirmarReserva(event: Event): void {
  event.preventDefault(); // Evita que se recargue la página
  alert('¡Su reserva ha sido realizada con éxito!');
  (event.target as HTMLFormElement).reset(); // Limpia el formulario
  }
}
