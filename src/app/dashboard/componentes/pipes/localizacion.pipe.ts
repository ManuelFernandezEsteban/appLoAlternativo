import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizacion'
})
export class LocalizacionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value===''){
      return 'Online';
    }
    return value;
  }

}
