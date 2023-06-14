import { Injectable, } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Cliente } from '../model/Cliente';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService  {

  private urlEndpointAll: string = URL_SERVICIOS+'clientes/all';
  private urlEndpointId: string = URL_SERVICIOS+'clientes/id';
  private urlEndpointSave: string = URL_SERVICIOS+'clientes/save';
  private urlEndpointUpdate: string = URL_SERVICIOS+'clientes/update';
  private urlEndpointDelete: string = URL_SERVICIOS+'clientes/del';
  private httpHeaders = new HttpHeaders()
                            .append('Content-Type', 'Application/json')
                            .append('Authorization', `Bearer $this.authService.token}`)

  constructor( private http: HttpClient ) { }

 

  getClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.urlEndpointAll).pipe(
      
        map(response => response as Cliente[])
      )
  
  }

  getClienteById(perId:string |null): Observable<Cliente>{

    
    console.log("service::", this.urlEndpointId+"/"+perId);
    return this.http.get<Cliente>(this.urlEndpointId+"/"+perId ).pipe(
      
        map(response => response as Cliente)
      )
  
  }
  
  saveCliente(cliente: Cliente): Observable<Cliente>{
    console.log("elclie:", cliente);
  
    return this.http.post<Cliente>(this.urlEndpointSave, cliente, {headers: this.httpHeaders})
  }

  updateCliente(perId: string | null, cliente: Cliente): Observable<Cliente>{
  
    return this.http.put<Cliente>(this.urlEndpointUpdate+"/"+perId, cliente, {headers: this.httpHeaders})
  }

  deleteCliente(perId: number): Observable<Cliente>{
  
    return this.http.delete<Cliente>(this.urlEndpointDelete+"/"+perId,  {headers: this.httpHeaders})
  }

}


