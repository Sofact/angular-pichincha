import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CuentaService } from '../../service/cuenta.service';
import { NuevoMovimientoComponent } from './nuevo-movimiento.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReporteService } from '../../service/reporte.service';
import { HttpClientModule } from '@angular/common/http';

describe('NuevoMovimientoComponent', () => {
  
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [NuevoMovimientoComponent],
    providers: [
      ReporteService,
      CuentaService,
      { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({}) } } }
    ]
  }).compileComponents();
});

  it('should create', () => {
    const fixture = TestBed.createComponent(NuevoMovimientoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
