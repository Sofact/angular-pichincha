import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor (private router: Router){}

  cliente(){

    console.log("CLiente");
  
    this.router.navigate(['cliente']);
  }
  cuentas(){

    console.log("cuentas");
  
    this.router.navigate(['cuentas']);
  }
  movimientos(){

    console.log("movimientos");
  
    this.router.navigate(['movimientos']);
  }
  reportes(){

    console.log("reportes");
  
    this.router.navigate(['reportes']);
  }
}
