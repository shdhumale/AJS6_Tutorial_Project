import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private myRouter: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('loggedIn')) == 'false'){
      this.myRouter.navigate(['']);
    }

  }

}
