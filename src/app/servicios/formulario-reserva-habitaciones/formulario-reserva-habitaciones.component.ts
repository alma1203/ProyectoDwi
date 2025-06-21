import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ⚠️ IMPORTANTE

@Component({
  selector: 'app-formulario-reserva-habitaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './formulario-reserva-habitaciones.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class FormularioReservaHabitacionesComponent {}
