import { Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { SobreNosotrosComponent } from '../app/sobre-nosotros/sobre-nosotros.component';
import { FormularioEventosComponent } from './servicios/formulario-eventos/formulario-eventos.component';
import { ServicioEventosComponent } from './servicios/servicio-eventos/servicio-eventos.component';
import { FormularioGymComponent } from './servicios/formulario-gym/formulario-gym.component';
import { ServicioGymComponent } from './servicios/servicio-gym/servicio-gym.component';
import { FormularioRecreacionComponent } from './servicios/formulario-recreacion/formulario-recreacion.component';
import { ServicioRecreacionComponent } from './servicios/servicio-recreacion/servicio-recreacion.component';
import { FormularioReservaGastronomicaComponent } from './servicios/formulario-reserva-gastronomica/formulario-reserva-gastronomica.component';
import { ServicioGastronomiaComponent } from './servicios/servicio-gastronomia/servicio-gastronomia.component';
import { FormularioReservaHabitacionesComponent } from './servicios/formulario-reserva-habitaciones/formulario-reserva-habitaciones.component';
import { ServicioHabitacionesApartamentComponent } from './servicios/servicio-habitaciones-apartament/servicio-habitaciones-apartament.component';
import { FormularioReservaSpaComponent } from './servicios/formulario-reserva-spa/formulario-reserva-spa.component';
import { ServicioSpaComponent } from './servicios/servicio-spa/servicio-spa.component';

import { CuartosComponent } from '../app//cuartos/cuartos.component';
import { ReservasComponent } from '../app//reservas/reservas.component';
import { EquipoComponent } from '../app/equipo/equipo.component';
import { TestimoniosComponent } from '../app/testimonios/testimonios.component';
import { ContactoComponent } from '../app/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'formulario-eventos', component: FormularioEventosComponent },
  { path: 'servicio-eventos', component: ServicioEventosComponent },

  { path: 'formulario-gym', component: FormularioGymComponent },
  { path: 'servicio-gym', component: ServicioGymComponent },

  { path: 'formulario-recreacion', component: FormularioRecreacionComponent },
  { path: 'servicio-recreacion', component: ServicioRecreacionComponent },

  { path: 'formulario-reserva-gastronomica', component: FormularioReservaGastronomicaComponent },
  { path: 'servicio-gastronomia', component: ServicioGastronomiaComponent },

  { path: 'formulario-reserva-habitaciones', component: FormularioReservaHabitacionesComponent },
  { path: 'servicio-habitaciones-apartament', component: ServicioHabitacionesApartamentComponent },

  { path: 'formulario-reserva-spa', component: FormularioReservaSpaComponent },
  { path: 'servicio-spa', component: ServicioSpaComponent },

  { path: 'cuartos', component: CuartosComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // Ruta comodín para errores 404
];