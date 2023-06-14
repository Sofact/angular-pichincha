import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { ClienteComponent } from './content/cliente/cliente.component';
import { NuevoClienteComponent } from './content/nuevo-cliente/nuevo-cliente.component';
import { UpdateComponent } from './content/cliente/update/update.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NuevaCuentaComponent } from './cuentas/nueva-cuenta/nueva-cuenta.component';
import { UpdateCuentasComponent } from './cuentas/update-cuentas/update-cuentas.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NuevoMovimientoComponent } from './movimientos/nuevo-movimiento/nuevo-movimiento.component';
import { ReporteComponent } from './reporte/reporte.component';


const routes: Routes = [

  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  {
    path:'home',  redirectTo: 'cliente', pathMatch: 'full'
  },

  { path: '', component: MainComponent,
    children: [
      {
        path:'cliente', component: ClienteComponent
      },
      {
        path:'nuevoCliente', component: NuevoClienteComponent
      },
      {
        path:'updateCliente/:perId', component: UpdateComponent
      },
      {
        path:'cuentas', component: CuentasComponent
      },
      {
        path:'movimientos', component: MovimientosComponent
      },
      {
        path:'reportes', component: ReporteComponent
      },
      {
        path:'nuevaCuenta', component: NuevaCuentaComponent
      },
      {
        path:'updateCuenta/:ctaId', component: UpdateCuentasComponent
      },
      {
        path:'nuevoMovimiento/:ctaId', component: NuevoMovimientoComponent
      },

    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
