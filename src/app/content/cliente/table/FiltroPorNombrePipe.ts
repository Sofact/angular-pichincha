import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';

@Pipe({
  name: 'filtroPorNombre'
})
export class FiltroPorNombrePipe implements PipeTransform {
  transform(clientes: Cliente[], filtro: string): Cliente[] {
    if (!filtro) {
      return clientes;
    }

    filtro = filtro.toLowerCase();

    console.log("filtro::", filtro);

    return clientes.filter(cliente => {
      const nombreCompleto = `${cliente.perNombre} `.toLowerCase();
      return nombreCompleto.includes(filtro);
    });
  }
}
