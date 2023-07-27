import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CuentaService } from '../../service/cuenta.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../service/cliente.service';
import { MovimientoService } from '../../service/movimiento.service';
import { of } from 'rxjs';
import { NuevaCuentaComponent } from './nueva-cuenta.component';

describe('NuevaCuentaComponent', () => {
  let component: NuevaCuentaComponent;
  let fixture: ComponentFixture<NuevaCuentaComponent>;
  let cuentaService: CuentaService;
  let clienteService: ClienteService;
  let movimientoService: MovimientoService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: CuentaService, useValue: { saveCuentas: jest.fn() } },
        { provide: ClienteService, useValue: { getClientes: jest.fn() } },
        { provide: MovimientoService, useValue: { saveMovimiento: jest.fn() } }
      ],
      declarations: [NuevaCuentaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCuentaComponent);
    component = fixture.componentInstance;
    cuentaService = TestBed.inject(CuentaService);
    clienteService = TestBed.inject(ClienteService);
    movimientoService = TestBed.inject(MovimientoService);
    router = TestBed.inject(Router);

    // Mock clientes data
    const mockClientes = [
      {
        perId: 1,
        perNombre: 'John Doe',
        perGenero: 'Hombre',
        perEdad: 38,
        perIdentificacion: '8079796',
        perDireccion: 'cra 27',
        perTelefono: '71016',
        cliId: 1,
        cliContrasena: 'string',
        cliEstado: 'true'
      }
    ];
    jest.spyOn(clienteService, 'getClientes').mockReturnValue(of(mockClientes));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch clientes on ngOnInit', () => {
    expect(component.personas).toEqual([
      {
        perId: 0,
        perNombre: '',
  
      }
    ]);
  });

  it('should call cuentaService.saveCuentas and movimientoService.saveMovimiento on guardar', () => {
    const mockCuenta = {
      ctaId: 1,
      ctaNumero: '12345',
      ctaTipoCuenta: 'Ahorros',
      ctaSaldoInicial: 1000,
      ctaEstado: 'Activa',
      perId: 1,
      perNombre: 'John Doe'
    };

    const saveCuentasSpy = jest.spyOn(cuentaService, 'saveCuentas').mockReturnValue(of(mockCuenta));
    const saveMovimientoSpy = jest.spyOn(movimientoService, 'saveMovimiento').mockReturnValue(of([]));

    component.cuenta = mockCuenta;
    component.guardar();

    expect(saveCuentasSpy).toHaveBeenCalledWith(mockCuenta);
    expect(saveMovimientoSpy).toHaveBeenCalledWith({
      movId: 0,
      ctaId: 1,
      movSaldo: 1000,
      movTipo: 'Deposito',
      movValor: 1000,
      movfecha: ''
    });
  });

 
});
