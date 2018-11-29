
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //public flag: boolean;
  private flag = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private myrouter: Router, private myAuthService : AuthService) {

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
      //Calling back end one more time to check 
      /* this.myAuthService.getUserData().subscribe(
        data =>
        {
          console.log("Data ----------------"+data);
        }
      ); */
      this.myrouter.navigate(['']);
    }
    else {
      console.log("this executed/////////////////////////////////////////");
      return this.flag;
    }

  }
}
