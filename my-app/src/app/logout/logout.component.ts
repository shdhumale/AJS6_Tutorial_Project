import { AuthGuard } from './../auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myAuth : AuthGuard, private myRouter : Router) { }

  ngOnInit() {
    //this.myAuth.setFlagValue(false);
    localStorage.clear();
    this.myRouter.navigate(['']);
    console.log("localStorage",localStorage);
  }

}
