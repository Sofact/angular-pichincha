import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movimiento } from '../../model/Movimiento';
import { Reporte } from '../../model/Reporte';
import { MovimientoService } from '../../service/movimiento.service';
import { ReporteService } from '../../service/reporte.service';

@Component({
  selector: 'app-table-reporte',
  templateUrl: './table-reporte.component.html',
  styleUrls: ['./table-reporte.component.css']
})
export class TableReporteComponent {

  constructor ( private reporteService: ReporteService,
                
    private router: Router){}

    reportes!: Reporte[];


ngOnInit(): void {

}


}
