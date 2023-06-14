import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from '../../../service/cliente.service';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let clienteService: ClienteService;
  let router: Router;

  beforeEach(async () => {
    const clienteServiceMock = {
      getClienteById: jest.fn().mockReturnValue(of({ perId: 1 })),
      updateCliente: jest.fn().mockReturnValue(of({}))
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
      declarations: [UpdateComponent],
      providers: [
        { provide: ClienteService, useValue: clienteServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the cliente details on initialization', () => {
    expect(clienteService.getClienteById).toHaveBeenCalledWith('1');
    expect(component.cliente.perId).toBe(1);
  });

  it('should update the cliente and navigate to cliente page', () => {
    const updatedCliente: Cliente = { perId: 1, perNombre: 'John Doe', perGenero: 'Masculino', perEdad: 30, perIdentificacion: '123456789', perDireccion: '123 Street', perTelefono: '1234567890', cliId: 1, cliContrasena: 'password', cliEstado: 'Activo' };
    component.cliente = updatedCliente;
    component.guardar();
    expect(clienteService.updateCliente).toHaveBeenCalledWith('1', updatedCliente);
    expect(router.navigate).toHaveBeenCalledWith(['cliente']);
  });
});
