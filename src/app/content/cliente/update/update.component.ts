import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../model/Cliente';
import { ClienteService } from '../../../service/cliente.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  perId!: string | null;
  cliente: Cliente=  {
                      perId: 0,
                      perNombre: '',
                      perGenero: '',
                      perEdad: 0,
                      perIdentificacion: '',
                      perDireccion: '',
                      perTelefono: '',
                      cliId:0,
                      cliContrasena: '',
                      cliEstado: ''
                    };

  constructor ( private clienteService: ClienteService,
                private _router: ActivatedRoute,
                private router: Router ){
                
                 
                }

                nombre: string = '';
                genero: string = '';
                edad: number = 0;
                identificacion: string = '';
                direccion: string = '';
                telefono: string = '';
                contrasena: string = '';
                estado: string = '';

ngOnInit(): void {

  this.perId = this._router.snapshot.paramMap.get('perId');

  console.log("perID",this.perId);
  this.clienteService.getClienteById(this.perId)
  .subscribe ( cliente => this.cliente = cliente
    
  );    

  
}
  
guardar(){

  this.clienteService.updateCliente(this.perId, this.cliente)
  .subscribe( cliente=> {
  
    this.router.navigate(['cliente'])
  })
  console.log("Actualizando:", this.perId);
}

}


