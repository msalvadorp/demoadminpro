import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ["./login.component.css"]
})
export class RegisterComponent implements OnInit {

  forma: FormGroup
  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.sonIguales("password", "password2")})

    this.forma.setValue({
      nombre: "Test",
      apellido: "Apellido",
      correo: "correo@hotmail.com",
      password: "123456",
      password2: "123456",
      condiciones: true
    })
  }

  sonIguales(campo1, campo2){
    return (grupo : FormGroup) => {

      let pass1 = grupo.controls[campo1].value
      let pass2 = grupo.controls[campo2].value

      if(pass1 === pass2) {
        return null
      }

      return {sonIguales: true} 
    }
  }
  registrarUsuario(){
    console.log(this.forma.valid)
    console.log(this.forma.value)
  }
}
