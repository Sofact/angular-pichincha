import { TestBed } from '@angular/core/testing';


import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Cliente } from '../model/Cliente';
import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';


describe('ClienteService', () => {
  let clienteService: ClienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ClienteService]
    });

    clienteService = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería enviar una solicitud POST para guardar un cliente', () => {
    const cliente: Cliente = {
                                perId:0,
                                cliId: 1,
                                perNombre: 'John Doe',
                                perGenero: 'Masculino',
                                perEdad: 30,
                                perIdentificacion: '1234567890',
                                perDireccion: '123 Calle Principal',
                                perTelefono: '123456789',
                                cliContrasena: 'password',
                                cliEstado: 'Activo'
                              };

    clienteService.saveCliente(cliente).subscribe(response => {
      expect(response).toEqual(cliente);
    });

    const req = httpMock.expectOne('http://localhost:8081/clientes/save');
    expect(req.request.method).toBe('POST');
    req.flush(cliente);


    
  });
});