import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'herramientas'
})
export class HerramientasPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    return ''
  }

}
