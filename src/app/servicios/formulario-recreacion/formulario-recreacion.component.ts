import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-recreacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formulario-recreacion.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class FormularioRecreacionComponent {
  confirmarReserva(event: Event): void {
  event.preventDefault(); // Evita que se recargue la página
  alert('¡Inicia Secion!');
  (event.target as HTMLFormElement).reset(); // Limpia el formulario
  }
}
