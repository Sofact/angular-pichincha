import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Cuenta } from '../../model/Cuenta';
import { ClienteService } from '../../service/cliente.service';
import { CuentaService } from '../../service/cuenta.service';
import { FiltroCuenta } from './FiltroCuenta';

@Component({
  selector: 'app-table-cuentas',
  templateUrl: './table-cuentas.component.html',
  styleUrls: ['./table-cuentas.component.css']
})
export class TableCuentasComponent {


  constructor ( private cuentasService: CuentaService,
    private router: Router){}

cuentas!: Cuenta[];
@Input() filtro: string = '';

ngOnInit(): void {

  console.log("parametro", this.filtro);

  this.cuentasService.getCuentas()
  .subscribe ( cuentas => this.cuentas = cuentas)    
}

update(ctaId: number){

  console.log("ctaID::",ctaId);
  this.router.navigate(['updateCuenta/',ctaId]);
  console.log("ctaId", ctaId);
}

delete(ctaId: number){

  this.cuentasService.deleteCuenta(ctaId)
  .subscribe( cuenta => {

  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  this.router.navigate(['cuentas']);
  });
  })

  console.log("cliid", ctaId);
}


}
