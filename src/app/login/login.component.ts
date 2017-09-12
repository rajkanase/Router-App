import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(
    private rtr:Router
  ) { }

  ngOnInit() {
  }

  doLogin(em:string,pass:string){
    this.rtr.navigate(['/dash',em]);
  }

}
