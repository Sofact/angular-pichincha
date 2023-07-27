import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../../model/Cuenta';
import { ClienteService } from '../../service/cliente.service';
import { CuentaService } from '../../service/cuenta.service';
import { Persona } from '../../model/Personas';
import { Cliente } from '../../model/Cliente';
import { MovimientoBase } from '../../model/MovimientoBase';
import { MovimientoService } from '../../service/movimiento.service';


@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {


  constructor ( private cuentaService: CuentaService,
                private clienteService: ClienteService,
                private MovimientoService: MovimientoService,
                private router: Router){}


cuenta: Cuenta ={ ctaId: 0,
                  ctaNumero: '',
                  ctaTipoCuenta: '',
                  ctaSaldoInicial: 0,
                  ctaEstado: '',
                  perId: 0,
                  perNombre:''
                }
movimiento: MovimientoBase= {

                          movId: 0,
                          ctaId: 0,
                          movSaldo: 0,
                          movTipo: '',
                          movValor: 0,
                          movfecha: '',
                          
                      }
  personas: Persona[] = [
                  { perId: 0, perNombre: '' }
                ];

  cliente: Cliente[] = [
                  {    perId: 0,
                      perNombre: '',
                      perGenero: '',
                      perEdad: 0,
                      perIdentificacion: '',
                      perDireccion: '',
                      perTelefono: '0',
                      cliId: 0,
                      cliContrasena: '',
                      cliEstado: ''
                  }]

  opcionSeleccionada: number =0;

  ngOnInit(): void {
    
    this.clienteService.getClientes()
    .subscribe((response) => {

        this.cliente = response; 
      } )
  }

  guardar(){


    this.cuenta.perId= this.opcionSeleccionada;
    this.cuentaService.saveCuentas(this.cuenta)
    .subscribe((response) => {    

      this.cuenta = response;

      this.movimiento.ctaId= this.cuenta.ctaId;
      this.movimiento.movValor = this.cuenta.ctaSaldoInicial;
      this.movimiento.movSaldo = this.cuenta.ctaSaldoInicial;
      this.movimiento.movTipo = "Deposito";

      this.MovimientoService.saveMovimiento(this.movimiento)
      .subscribe((respuesta) => { 

      this.router.navigate(['cuentas'])
      })

    } )

  }



}

