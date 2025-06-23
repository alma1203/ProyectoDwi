import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent{
  servicios = [
    {
      nombre: 'Spa & Masajes',
      descripcion: 'Relájate con nuestros tratamientos de spa.',
      precio: 120,
      imagen: 'assets/img/servicio-spa.jpg'
    },
    {
      nombre: 'Gastronomía',
      descripcion: 'Cocina gourmet con ingredientes frescos.',
      precio: 80,
      imagen: 'assets/img/servicio-gastronomia.jpg'
    },
    {
      nombre: 'Eventos Corporativos',
      descripcion: 'Salones equipados para eventos profesionales.',
      precio: 250,
      imagen: 'assets/img/servicio-eventos.jpg'
    }
  ];
}
