import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class BuscarPipe implements PipeTransform {
  transform(values: any, arg: string): any {

    if(arg.length <3) {return values}
    let resultado: string[] = [];
    for (const value of values) {
      if(value.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado = [...resultado, value];
      }
    }
    return  resultado
  }
}
