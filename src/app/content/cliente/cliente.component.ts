import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  constructor(private router: Router) { }

  query: string = '';
  parametro: string='';

  buscar() {

    this.parametro = this.query;
    this.router.navigate(['cliente']);
    console.log('Realizando búsqueda:', this.query);
  }

  guardar() {

    console.log('Guardando:', this.query);
    this.router.navigate(['nuevoCliente']);
  }

}
