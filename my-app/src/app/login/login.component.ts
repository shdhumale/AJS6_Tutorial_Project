import { AuthGuard } from './../auth.guard';
import { element } from 'protractor';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForOf } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*   string : UserName;
  string : Password; */
  show: boolean = false;
 
  constructor(private myService : AuthService, private myAuth: AuthGuard, private myrouter: Router) { }

  ngOnInit() {
  }

  //Called when user hit the Submit buttion on the login form

 /*  getUserData(UserName, Password)
  {
    console.log('UserName'+UserName, 'Password'+Password );
    console.log("Value of service is" + this.myService.getUserData(UserName,Password));
  } */
 /*  getUserData(event)
  {
    //event.preventDefault();
    const target = event.taget;
    const uname = target.querySelector('#UserName');
    const pwd = target.querySelector('#Password');
    console.log(event);
    console.log('UserName',uname);
    console.log('Password',pwd);
  } */
  getUserData(form: NgForm)
  {
    
     /*  console.log(form.value);
      console.log('Name:' + form.controls['UserName'].value);
      console.log('Password:' + form.controls['Password'].value);
      console.log('Form Submitted:' + form.submitted);
      console.log('------------',this.myService.getUserData(form.controls['UserName'].value, form.controls['Password'].value)) ;
      this.show = this.myService.getUserData(form.controls['UserName'].value, form.controls['Password'].value);   */

      this.myService.getUserData().subscribe(
        (data: any) => {
          //data = JSON.parse(data['_body']);
          console.log("data",data);
          let myServiceData = [];
          let serviceUserName ='';
          let servicePassword ='';
          myServiceData = data;
          let  element;
          // tslint:disable-next-line:no-shadowed-variable
         /* for (let index = 0; index < myServiceData.length; index++) {
           element = JSON.parse(myServiceData[index]);
        } */
         if (myServiceData[0].username == form.controls['UserName'].value  && myServiceData[0].password == form.controls['Password'].value) {
          this.show = true;
          this.myAuth.setFlagValue(true);
        } else {
          this.show = false;
          this.myrouter.navigate(['']);       
        }
      },
      err => console.log(err), // error
      () => console.log('getData Complete') // complete  
      );
    }
    
}
