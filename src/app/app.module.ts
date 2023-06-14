import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ClienteComponent } from './content/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { NuevoClienteComponent } from './content/nuevo-cliente/nuevo-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './content/cliente/table/table.component';
import { UpdateComponent } from './content/cliente/update/update.component';
import { FiltroPorNombrePipe } from './content/cliente/table/FiltroPorNombrePipe';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TableCuentasComponent } from './cuentas/table-cuentas/table-cuentas.component';
import { FiltroCuenta } from './cuentas/table-cuentas/FiltroCuenta';
import { NuevaCuentaComponent } from './cuentas/nueva-cuenta/nueva-cuenta.component';
import { UpdateCuentasComponent } from './cuentas/update-cuentas/update-cuentas.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { TableMovimientosComponent } from './movimientos/table-movimientos/table-movimientos.component';
import { NuevoMovimientoComponent } from './movimientos/nuevo-movimiento/nuevo-movimiento.component';
import { ReporteComponent } from './reporte/reporte.component';
import { TableReporteComponent } from './reporte/table-reporte/table-reporte.component';
import { FiltroMovimiento } from './movimientos/table-movimientos/FiltroMovimiento';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    ContentComponent,
    ClienteComponent,
    NuevoClienteComponent,
    TableComponent,
    UpdateComponent,
    FiltroPorNombrePipe,
    FiltroCuenta,
    FiltroMovimiento,
    CuentasComponent,
    TableCuentasComponent,
    NuevaCuentaComponent,
    UpdateCuentasComponent,
    MovimientosComponent,
    TableMovimientosComponent,
    NuevoMovimientoComponent,
    ReporteComponent,
    TableReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
