import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //public flag: boolean;
  private flag = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private myrouter: Router) {

  }

  setFlagValue(value: boolean) {
    this.flag = value;
    localStorage.setItem('loggedIn', 'true');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return true;
    if (!this.flag) {
      this.myrouter.navigate(['']);
    }
    else {
      console.log("this executed/////////////////////////////////////////");
      return this.flag;
    }

  }
}
