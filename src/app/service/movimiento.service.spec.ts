import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovimientoService } from './movimiento.service';
import { Movimiento } from '../model/Movimiento';


describe('MovimientoService', () => {
  let service: MovimientoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovimientoService]
    });
    service = TestBed.inject(MovimientoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the movimientos', () => {
    const mockMovimientos: Movimiento[] = [
      // Define your mock data here
    ];

    service.getMovimientos().subscribe(movimientos => {
      expect(movimientos).toEqual(mockMovimientos);
    });

  
  });

 

  });

  

  // Add more test cases for other methods in MovimientoService

