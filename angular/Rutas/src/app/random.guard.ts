import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {

  canActivate() {
    let randomGuard = Math.random();
    console.log(randomGuard);
    if (randomGuard > 0.4) {
      return true;
    }
    return false;
  }

}
