import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuelta'
})
export class VueltaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      // let arr = value.split(' ');
      // let arrRev = arr.reverse();
      // let strRev = arrRev.join(' ');
      // return strRev;
      return value.split(' ').reverse().join(' ');
    }
  }

}
