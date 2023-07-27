import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CuentaService } from './cuenta.service';
import { Cuenta } from '../model/Cuenta';

describe('CuentaService', () => {
  let service: CuentaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CuentaService]
    });
    service = TestBed.inject(CuentaService);
    httpMock = TestBed.inject(HttpTestingController);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the cuentas', () => {
    const mockCuentas: Cuenta[] = [

    ];

    service.getCuentas().subscribe(cuentas => {
      expect(cuentas).toEqual(mockCuentas);
    });

  });



});
