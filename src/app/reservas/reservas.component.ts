import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['../../assets/css/style3.css']
})
export class ReservasComponent {
  reservar(event: Event): void {
    event.preventDefault();
    alert('¡Reserva realizada con éxito!');
    (event.target as HTMLFormElement).reset();
  }

}
