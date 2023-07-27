import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteService } from '../service/reporte.service';
import { Persona } from '../model/Personas';
import { ClienteService } from '../service/cliente.service';
import { Reporte } from '../model/Reporte';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private router: Router,
              private clienteService: ClienteService, 
              private reporteService: ReporteService) { }

  query: string = '';
  parametro: string='';

  fechainicio: string = '';
  fechaFin: string = '';

  opcionSeleccionada: number =0;

  personas: Persona[] = [
    { perId: 0, perNombre: '' }
  ];

  reportes!: Reporte[];

  ngOnInit(): void {
    
    this.clienteService.getClientes()
    .subscribe((response) => {

        this.personas = response; 
      } )

    }
  

  buscar() {

    this.parametro = this.query;
    this.router.navigate(['cuentas']);
  }

  descargar() {

    this.reporteService.getReportesPdf(this.fechainicio, this.fechaFin, this.opcionSeleccionada);
    this.router.navigate(['reportes']);
  }

  capturarId(){
  }
  generar(){

    this.reporteService.getReportes(this.fechainicio, this.fechaFin, this.opcionSeleccionada)
    .subscribe ( reportes => 
  
      this.reportes = reportes,    
      )    
  
  }
 

}
