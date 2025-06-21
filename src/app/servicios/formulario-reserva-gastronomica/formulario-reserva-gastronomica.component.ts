import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <== Importar esto

@Component({
  selector: 'app-formulario-reserva-gastronomica',
  standalone: true,
  templateUrl: './formulario-reserva-gastronomica.component.html',
  styleUrls: ['../../../assets/css/style2.css'],
  imports: [CommonModule, FormsModule, RouterModule] // <== Asegúrate que esté aquí también
})
export class FormularioReservaGastronomicaComponent {
  confirmarReserva(event: Event): void {
  event.preventDefault(); // Evita que se recargue la página
  alert('¡Su reserva ha sido realizada con éxito!');
  (event.target as HTMLFormElement).reset(); // Limpia el formulario
  }
}
