import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '../../model/Cuenta';
import { CuentaService } from '../../service/cuenta.service';

@Component({
  selector: 'app-update-cuentas',
  templateUrl: './update-cuentas.component.html',
  styleUrls: ['./update-cuentas.component.css']
})
export class UpdateCuentasComponent implements OnInit{


  constructor ( private cuentaService: CuentaService,
                private _router: ActivatedRoute,
                private router: Router){}



ctaId!: string | null;
cuenta: Cuenta ={ ctaId: 0,
                  ctaNumero: '',
                  ctaTipoCuenta: '',
                  ctaSaldoInicial: 0,
                  ctaEstado: '',
                  perId: 0,
                  perNombre:''
                 
                }
    ngOnInit(): void {

                  this.ctaId = this._router.snapshot.paramMap.get('ctaId');
                
                  console.log("perID",this.ctaId);
                  this.cuentaService.getCuentaById(this.ctaId)
                  .subscribe ( cuenta => this.cuenta = cuenta
                    
                  );    
                
                  
                }


guardar(){

  this.cuentaService.updateCuenta(this.ctaId, this.cuenta)
  .subscribe( cliente=> {
  
    this.router.navigate(['cuentas'])
  })
  console.log("Actualizando:", this.ctaId);
}

}