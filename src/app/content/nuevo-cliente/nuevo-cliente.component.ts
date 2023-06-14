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
  saveCliente() {
    throw new Error('Method not implemented.');
  }

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
      
        console.log(response);

        this.router.navigate(['cliente'])
      } )
  
    console.log("Guardando", this.cliente);
  }

}
