import { Pipe, PipeTransform } from '@angular/core';
import { Cuenta } from '../../model/Cuenta';

@Pipe({
  name: 'filtroCuenta'
})
export class FiltroCuenta implements PipeTransform {
  transform(cuentas: Cuenta[], filtro: string): Cuenta[] {
    if (!filtro) {
      return cuentas;
    }

    filtro = filtro.toLowerCase();

    console.log("filtro::", filtro);

    return cuentas.filter(cuentas => {
      const nombreCompleto = `${cuentas.ctaNumero} `.toLowerCase();
      return nombreCompleto.includes(filtro);
    });
  }
}
