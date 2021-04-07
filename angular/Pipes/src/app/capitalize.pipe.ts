import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {

      return value.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
      }).join(' ');

    }
    return null;
  }

}
