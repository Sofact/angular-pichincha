import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent {


  constructor(private router: Router) { }

  query: string = '';
  parametro: string='';

  buscar() {

    this.parametro = this.query;
    this.router.navigate(['cuentas']);
    console.log('Realizando búsqueda:', this.query);
  }

  guardar() {

    console.log('Guardando:', this.query);
    this.router.navigate(['nuevaCuenta']);
  }

}
