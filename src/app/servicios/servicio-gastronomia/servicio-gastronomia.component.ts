import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicio-gastronomia',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 necesario para usar routerLink en el HTML
  templateUrl: './servicio-gastronomia.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class ServicioGastronomiaComponent {}
