import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ingresar(){
this.router.navigate(['dashboard'])
    
  }
}
