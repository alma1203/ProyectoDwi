import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-gym',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Importante
  templateUrl: './formulario-gym.component.html',
  styleUrls: ['../../../assets/css/style2.css']
})
export class FormularioGymComponent {}
