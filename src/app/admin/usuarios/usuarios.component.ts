import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa esto
import { NgClass } from '@angular/common'; // <-- Para usar [ngClass]

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios = [
    { nombre: 'Juan Pérez', correo: 'juan@gmail.com', rol: 'admin', activo: true },
    { nombre: 'Ana Torres', correo: 'ana@hotmail.com', rol: 'cliente', activo: false },
    { nombre: 'Carlos Mendoza', correo: 'carlos@yahoo.com', rol: 'cliente', activo: true },
  ];
}
