import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  enviarConsulta(event: Event): void {
    event.preventDefault();
    alert('¡Consulta enviada con éxito!');
    (event.target as HTMLFormElement).reset();
  }

}
