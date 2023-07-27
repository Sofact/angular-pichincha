import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { ClienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  
 

  constructor ( private clienteService: ClienteService,
                private router: Router){}




  cliente: Cliente ={ perId: 0,
                      perNombre: '',
                      perGenero: '',
                      perEdad: 0,
                      perIdentificacion: '',
                      perDireccion: '',
                      perTelefono: '',
                      cliId:0,
                      cliContrasena: '',
                      cliEstado: '',
                    }



  guardar(){

    this.clienteService.saveCliente(this.cliente)
      .subscribe((response: Cliente) => {
         this.router.navigate(['cliente'])
      } )
   }

}
