import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Reporte } from '../model/Reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlEndpointAll: string = URL_SERVICIOS+'movimientos/reporte';
  private urlEndpointPdf: string = URL_SERVICIOS+'movimientos/pdf';

  constructor( private http: HttpClient ) { }

  getReportes(fechaInicio: string, fechaFin: string, opcionSeleccionada:number): Observable<Reporte[]>{

    const url = `${this.urlEndpointAll}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&opcion=${opcionSeleccionada}`;
   
    return this.http.get<Reporte[]>(url).pipe(
        
      map(response => response as Reporte[])
    )
  }

  getReportesPdf(fechaInicio: string, fechaFin: string, opcionSeleccionada:number) {

    const url = `${this.urlEndpointPdf}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&opcion=${opcionSeleccionada}`;

    this.http.get(url,   { responseType: 'blob', observe: 'response' })
      .subscribe((response: HttpResponse<Blob>) => {
        const blob = new Blob([response.body as BlobPart], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
}
}
