import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myhttpClient : HttpClient) { }

   /*getUserData(UserName, Password) {
    if (UserName == "test" && Password == "ptest") {
      return true;
    }
    else {
      return false;
    }
  } */
  getUserData() {
    /* if (UserName == "test" && Password == "ptest") {
      return true;
    }
    else {
      return false;
    } */
    return this.myhttpClient.get('http://localhost:2303/login');
  } 
}
