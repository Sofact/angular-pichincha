import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReporteService } from './reporte.service';
import { Reporte } from '../model/Reporte';

describe('ReporteService', () => {
  let service: ReporteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReporteService]
    });
    service = TestBed.inject(ReporteService);
    httpMock = TestBed.inject(HttpTestingController);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the reportes', () => {
    const mockReportes: Reporte[] = [
      // Define your mock data here
    ];

    const fechaInicio = '2022-01-01';
    const fechaFin = '2022-12-31';
    const opcionSeleccionada = 1;

    service.getReportes(fechaInicio, fechaFin, opcionSeleccionada).subscribe(reportes => {
      expect(reportes).toEqual(mockReportes);
    });

  
  });

  // Add more test cases for other methods in ReporteService

});
