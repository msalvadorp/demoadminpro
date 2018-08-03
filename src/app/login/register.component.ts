import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import  swal from 'sweetalert'
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../modelos/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ["./login.component.css"]
})
export class RegisterComponent implements OnInit {

  forma: FormGroup
  constructor(public _usuarioService: UsuarioService, public _router : Router) { }

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

  sonIguales(campo1 : string, campo2 : string){
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

    if(!this.forma.valid)
    {
      return
    }

    if(!this.forma.value.condiciones){
      swal("Importante!", "Debe aceptar las condiciones", "warning")

      
      //console.log("Debe aceptar las condiciones")
    }
 
    let usuario : Usuario = new Usuario(this.forma.value.nombre, this.forma.value.apellido, 
      this.forma.value.correo, this.forma.value.password)
    console.log(usuario)

    this._usuarioService.registrarUsuario(usuario).subscribe(resp => {
      
      this._router.navigate(["/login"])
     
    })
    //console.log(this.forma.valid)
    //console.log(this.forma.value)
  }
}
