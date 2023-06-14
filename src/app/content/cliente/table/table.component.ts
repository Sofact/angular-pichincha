import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../model/Cliente';
import { ClienteService } from '../../../service/cliente.service';
import { FiltroPorNombrePipe } from './FiltroPorNombrePipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  constructor ( private clienteService: ClienteService,
                private router: Router){}

  cliente!: Cliente[];
  @Input() filtro: string = '';

  ngOnInit(): void {

    console.log("parametro", this.filtro);

    this.clienteService.getClientes()
      .subscribe ( cliente => this.cliente = cliente)    
  }

  update(perId: number){

    this.router.navigate(['updateCliente/',perId]);
    console.log("cliid", perId);
  }

  delete(perId: number){

    this.clienteService.deleteCliente(perId)
    .subscribe( () => {
    
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['home']);
      });
    })

    console.log("cliid", perId);
  }


}
