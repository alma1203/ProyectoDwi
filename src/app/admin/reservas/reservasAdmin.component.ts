import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reservas-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservasAdmin.component.html',
  styleUrls: ['./reservasAdmin.component.css']
})
export class ReservasAdminComponent {
  reservas = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    correo: 'juan.perez@gmail.com',
    fecha: '2025-06-20',
    hora: '14:00',
    habitacion: 'Suite Premium',
    estado: 'confirmado'
  },
  {
    id: 2,
    nombre: 'Ana Torres',
    correo: 'ana.torres@hotmail.com',
    fecha: '2025-06-21',
    hora: '10:30',
    habitacion: 'Habitación Doble',
    estado: 'pendiente'
  },
  {
    id: 3,
    nombre: 'Carlos Mendoza',
    correo: 'carlos.mdz@yahoo.com',
    fecha: '2025-06-22',
    hora: '12:15',
    habitacion: 'Suite Ejecutiva',
    estado: 'cancelado'
  },
  {
    id: 4,
    nombre: 'Lucía Romero',
    correo: 'lucia.romero@gmail.com',
    fecha: '2025-06-23',
    hora: '15:00',
    habitacion: 'Habitación Simple',
    estado: 'confirmado'
  },
  {
    id: 5,
    nombre: 'Andrés Silva',
    correo: 'andres.silva@outlook.com',
    fecha: '2025-06-24',
    hora: '09:00',
    habitacion: 'Suite Familiar',
    estado: 'pendiente'
  }
];

}
