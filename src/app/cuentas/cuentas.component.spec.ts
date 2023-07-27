import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CuentasComponent } from './cuentas.component';
import {  Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CuentasComponent', () => {
  let component: CuentasComponent;
  let fixture: ComponentFixture<CuentasComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ CuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentasComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  test('should navigate to "cuentas" on buscar()', waitForAsync(() => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.query = 'search query';
    component.buscar();

    fixture.whenStable().then(() => {
      expect(navigateSpy).toHaveBeenCalledWith(['cuentas']);
      expect(component.parametro).toBe('search query');
    });
  }));


  test('should navigate to "nuevaCuenta" on guardar()', waitForAsync(() => {
  
    const navigateSpy = jest.spyOn( router, 'navigate');

    component.query = 'save query';
    component.guardar();

    expect(navigateSpy).toHaveBeenCalledWith(['nuevaCuenta']);
    expect(component.parametro).toBe('save query');
  }));
*/

})
