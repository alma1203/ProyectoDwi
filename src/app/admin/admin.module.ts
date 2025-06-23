import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgChartsModule } from 'ng2-charts';
import { ServiciosComponent } from './servicios/servicios.component';
import { ReservasAdminComponent } from './reservas/reservasAdmin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
@NgModule({
  declarations: [AdminComponent,ServiciosComponent,ReservasAdminComponent,UsuariosComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  exports: [AdminComponent,ServiciosComponent,ReservasAdminComponent,UsuariosComponent]
})
export class AdminModule { }
export class ServiciosModule { }
export class ReservasAdminModule { }
