import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cuenta } from '../model/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  
  private urlEndpointAll: string = URL_SERVICIOS+'cuentas/all';
  private urlEndpointId: string = URL_SERVICIOS+'cuentas/id';
  private urlEndpointSave: string = URL_SERVICIOS+'cuentas/save';
  private urlEndpointUpdate: string = URL_SERVICIOS+'cuentas/update';
  private urlEndpointDelete: string = URL_SERVICIOS+'cuentas/del';
  private httpHeaders = new HttpHeaders()
                            .append('Content-Type', 'Application/json')
                            .append('Authorization', `Bearer $this.authService.token}`)

  constructor( private http: HttpClient ) { }


  getCuentas(): Observable<Cuenta[]>{
  
    return this.http.get<Cuenta[]>(this.urlEndpointAll).pipe(
      
        map(response => response as Cuenta[])
      )
  }

  getCuentaById(ctaId:string |null): Observable<Cuenta>{

    return this.http.get<Cuenta>(this.urlEndpointId+"/"+ctaId ).pipe(
      
        map(response => response as Cuenta)
      )
  
  }
  

  saveCuentas(cuenta: Cuenta): Observable<Cuenta>{
  
    return this.http.post<Cuenta>(this.urlEndpointSave, cuenta, {headers: this.httpHeaders})
  }

   updateCuenta(ctaId: string | null, cuenta: Cuenta): Observable<Cuenta>{
  
    return this.http.put<Cuenta>(this.urlEndpointUpdate+"/"+ctaId, cuenta, {headers: this.httpHeaders})
  }

  deleteCuenta(ctaId: number): Observable<Cuenta>{
  
    return this.http.delete<Cuenta>(this.urlEndpointDelete+"/"+ctaId,  {headers: this.httpHeaders})
  }

}
