import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CuentaService } from '../../service/cuenta.service';
import { NuevaCuentaComponent } from './nueva-cuenta.component';

describe('NuevaCuentaComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CuentaService],
      declarations: [NuevaCuentaComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NuevaCuentaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
