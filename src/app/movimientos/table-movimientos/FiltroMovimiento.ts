import { Pipe, PipeTransform } from '@angular/core';
import { Cuenta } from '../../model/Cuenta';
import { Movimiento } from '../../model/Movimiento';

@Pipe({
  name: 'filtroMovimiento'
})
export class FiltroMovimiento implements PipeTransform {
  transform(movimiento: Movimiento[], filtro: string): Movimiento[] {
    if (!filtro) {
      return movimiento;
    }

    filtro = filtro.toLowerCase();

    console.log("filtro::", filtro);

    return movimiento.filter(movimiento => {
      const nombreCompleto = `${movimiento.perNombre} `.toLowerCase();
      return nombreCompleto.includes(filtro);
    });
  }
}