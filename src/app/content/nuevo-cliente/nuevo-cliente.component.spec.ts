import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoClienteComponent } from './nuevo-cliente.component';
import { ClienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Cliente } from '../../model/Cliente';

describe('NuevoClienteComponent', () => {
  let component: NuevoClienteComponent;
  let fixture: ComponentFixture<NuevoClienteComponent>;
  let clienteService: ClienteService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoClienteComponent],
      providers: [
        { provide: ClienteService, useValue: { saveCliente: jest.fn() } },
        { provide: Router, useValue: { navigate: jest.fn() } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save cliente and navigate to cliente page', () => {
    const cliente: Cliente = {
      perId: 0,
      perNombre: '',
      perGenero: '',
      perEdad: 0,
      perIdentificacion: '',
      perDireccion: '',
      perTelefono: '',
      cliId: 0,
      cliContrasena: '',
      cliEstado: ''
    };
    const saveClienteSpy = jest.spyOn(clienteService, 'saveCliente').mockReturnValue(of(cliente));
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.cliente = cliente;
    component.guardar();

    expect(saveClienteSpy).toHaveBeenCalledWith(cliente);
    expect(navigateSpy).toHaveBeenCalledWith(['cliente']);
  });
});

