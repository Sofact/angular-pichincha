import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movimiento } from '../model/Movimiento';
import { MovimientoBase } from '../model/MovimientoBase';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private urlEndpointAll: string = URL_SERVICIOS+'movimientos/all';
  private urlEndpointId: string = URL_SERVICIOS+'movimientos/id';
  private urlEndpointSave: string = URL_SERVICIOS+'movimientos/save';
  private urlEndpointUpdate: string = URL_SERVICIOS+'movimientos/update';
  private urlEndpointDelete: string = URL_SERVICIOS+'movimientos/del';
  private httpHeaders = new HttpHeaders()
                            .append('Content-Type', 'Application/json')
                            .append('Authorization', `Bearer $this.authService.token}`)

  constructor( private http: HttpClient ) { }

getMovimientos(): Observable<Movimiento[]>{

  return this.http.get<Movimiento[]>(this.urlEndpointAll).pipe(
      
    map(response => response as Movimiento[])
  )
}

saveMovimiento(movimientoBase: MovimientoBase): Observable<MovimientoBase[]>{
  
  return this.http.post<MovimientoBase[]>(this.urlEndpointSave, movimientoBase, {headers: this.httpHeaders})
}

deleteMovimiento(movId: number): Observable<MovimientoBase>{
  
  return this.http.delete<MovimientoBase>(this.urlEndpointDelete+"/"+movId,  {headers: this.httpHeaders})
}

}
