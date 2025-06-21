import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // útil para *ngFor, *ngIf, etc.

@Component({
  selector: 'app-servicio-spa',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './servicio-spa.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class ServicioSpaComponent {}
