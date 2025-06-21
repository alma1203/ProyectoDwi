import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Necesario para routerLink
import { CommonModule } from '@angular/common';  // ✅ Necesario si usas *ngIf, *ngFor en HTML

@Component({
  selector: 'app-formulario-reserva-spa',
  standalone: true,
  imports: [RouterModule, CommonModule], // ✅ IMPORTA routerLink y funciones de Angular comunes
  templateUrl: './formulario-reserva-spa.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class FormularioReservaSpaComponent {}
