import { Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { SobreNosotrosComponent } from '../app/sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from '../app/servicios/servicios.component';
import { CuartosComponent } from '../app//cuartos/cuartos.component';
import { ReservasComponent } from '../app//reservas/reservas.component';
import { EquipoComponent } from '../app/equipo/equipo.component';
import { TestimoniosComponent } from '../app/testimonios/testimonios.component';
import { ContactoComponent } from '../app/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'cuartos', component: CuartosComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // Ruta comodín para errores 404
];