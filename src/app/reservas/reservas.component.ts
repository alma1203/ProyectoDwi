import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['../../assets/css/style3.css']
})
export class ReservasComponent {
  reservar(event: Event): void {
    event.preventDefault();
    alert('¡Inicia Secion!');
    (event.target as HTMLFormElement).reset();
  }

}
