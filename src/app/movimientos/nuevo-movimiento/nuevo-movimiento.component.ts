import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../service/cuenta.service';
import { ClienteService } from '../../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '../../model/Cuenta';
import { Persona } from '../../model/Personas';
import { MovimientoService } from '../../service/movimiento.service';
import { MovimientoBase } from '../../model/MovimientoBase';

@Component({
  selector: 'app-nuevo-movimiento',
  templateUrl: './nuevo-movimiento.component.html',
  styleUrls: ['./nuevo-movimiento.component.css']
})
export class NuevoMovimientoComponent implements OnInit{

  
  constructor ( private cuentaService: CuentaService,
    private movimientoService: MovimientoService,
    private _router: ActivatedRoute,
    private router: Router){}

    cuenta: Cuenta ={ ctaId: 0,
                      ctaNumero: '',
                      ctaTipoCuenta: '',
                      ctaSaldoInicial: 0,
                      ctaEstado: '',
                      perId: 0,
                      perNombre:''
                    
                    }

movimiento: MovimientoBase ={ 
                              movId: 0,
                              ctaId: 0,
                              movSaldo: 0,
                              movTipo: '',
                              movValor: 0,
                              movfecha: '',
                }



  ctaId!: string | null;
  tipos: any[] = [
    {tipoId: 0, tipoNombre:'Retiro'},
    {tipoId: 1, tipoNombre:'Deposito'},
  ]  

  opcionSeleccionada: number =0;
  tipoSeleccionado: string ='';
  saldo:boolean=true;

ngOnInit(): void {

  this.ctaId = this._router.snapshot.paramMap.get('ctaId');
  this.cuentaService.getCuentaById(this.ctaId)
                  .subscribe ( cuenta => this.cuenta = cuenta
                    
                  ); 
}



capturarId() {
console.log('ID seleccionado:', this.opcionSeleccionada);

}
capturarTipo(){
}



guardar(){

  //this.movimiento.ctaId=
  const saldoInicial = parseFloat(this.cuenta.ctaSaldoInicial.toString());
  const valorMovimiento = parseFloat(this.movimiento.movValor.toString());

  this.movimiento.movSaldo = saldoInicial + valorMovimiento;
  this.movimiento.ctaId = this.cuenta.ctaId;
  this.movimiento.movTipo = this.tipoSeleccionado;

  console.log("Movimientotipo::",this.movimiento.movTipo);
  if (this.movimiento.movTipo === 'Retiro'){
    if(saldoInicial <= 0){
        this.mostrarAlerta();
        this.saldo=false;
    }else{

      this.movimiento.movSaldo = saldoInicial - valorMovimiento;
    }
  }
  else{
  
    this.movimiento.movSaldo = saldoInicial + valorMovimiento;
    
  }


if(this.saldo){

      console.log("el idcat::", this.movimiento);
        this.movimientoService.saveMovimiento(this.movimiento)
        .subscribe((response) => {    

          console.log(response);

          this.router.navigate(['movimientos'])
        } )

    console.log("Guardando", this.movimiento);
  }else{
    this.router.navigate(['movimientos'])
  }
}

mostrarAlerta() {
  window.alert('Saldo no disponible');
}

}