import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Cuenta } from '../../model/Cuenta';
import { CuentaService } from '../../service/cuenta.service';
import { UpdateCuentasComponent } from './update-cuentas.component';

describe('UpdateCuentasComponent', () => {
  let component: UpdateCuentasComponent;
  let fixture: ComponentFixture<UpdateCuentasComponent>;
  let cuentaService: CuentaService;
  let router: Router;

  beforeEach(async () => {
    const cuentaServiceMock = {
      getCuentaById: jest.fn().mockReturnValue(of({ ctaId: 1 })),
      updateCuenta: jest.fn().mockReturnValue(of({}))
    };
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue('1')
        }
      }
    };
    const routerMock = {
      navigate: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [UpdateCuentasComponent],
      providers: [
        { provide: CuentaService, useValue: cuentaServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCuentasComponent);
    component = fixture.componentInstance;
    cuentaService = TestBed.inject(CuentaService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the cuenta details on initialization', () => {
    expect(cuentaService.getCuentaById).toHaveBeenCalledWith('1');
    expect(component.cuenta.ctaId).toBe(1);
  });

  it('should update the cuenta and navigate to cuentas page', () => {
    const updatedCuenta: Cuenta = { ctaId: 1, ctaNumero: '123456', ctaTipoCuenta: 'Ahorros', ctaSaldoInicial: 1000, ctaEstado: 'Activa', perId: 1, perNombre: 'John Doe' };
    component.cuenta = updatedCuenta;
    component.guardar();
    expect(cuentaService.updateCuenta).toHaveBeenCalledWith('1', updatedCuenta);
    expect(router.navigate).toHaveBeenCalledWith(['cuentas']);
  });
});
