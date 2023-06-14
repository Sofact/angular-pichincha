import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../../model/Cuenta';
import { Movimiento } from '../../model/Movimiento';
import { CuentaService } from '../../service/cuenta.service';
import { MovimientoService } from '../../service/movimiento.service';

@Component({
  selector: 'app-table-movimientos',
  templateUrl: './table-movimientos.component.html',
  styleUrls: ['./table-movimientos.component.css']
})
export class TableMovimientosComponent {

  constructor ( private movimientoService: MovimientoService,
                
    private router: Router){}

movimientos!: Movimiento[];
@Input() filtro: string = '';

ngOnInit(): void {

  console.log("parametro", this.filtro);

  this.movimientoService.getMovimientos()
  .subscribe ( movimientos => 
    
  //  console.log("movimiento", movimientos)
    this.movimientos = movimientos,
   
    
    
    )    
}

update(ctaId: number){

  console.log("ctaID::",ctaId);
  this.router.navigate(['nuevoMovimiento/',ctaId]);
  console.log("ctaId", ctaId);
}

delete(movId: number){

  this.movimientoService.deleteMovimiento(movId)
  .subscribe( cuenta => {

  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  this.router.navigate(['movimientos']);
  });
  })

  console.log("cliid", movId);
}


}
