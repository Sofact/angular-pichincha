import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent {


  constructor(private router: Router) { }

  query: string = '';
  parametro: string='';

  buscar() {

    this.parametro = this.query;
    this.router.navigate(['movimientos']);
    console.log('Realizando búsqueda:', this.query);
  }

  guardar() {

    console.log('Guardando:', this.query);
    this.router.navigate(['nuevoMovimiento']);
  }

}
