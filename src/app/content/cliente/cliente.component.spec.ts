import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ ClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showld navigate to "cliente" route on buscar()', () =>{
  
    const navigateSpy = jest.spyOn (router, 'navigate');

    component.query = 'search query';
    component.buscar ();

    expect(navigateSpy).toHaveBeenCalledWith(['cliente']);
    expect(component.parametro).toBe('search query');
  });

  test('Should navigate to "nuevoCliente" route on guardar()', () =>{
  
    const navigateSpy = jest.spyOn(router,'navigate')

    component.query = 'save query';
    component.guardar();

    expect(navigateSpy).toHaveBeenCalledWith(['nuevoCliente']);
  });

  

});
