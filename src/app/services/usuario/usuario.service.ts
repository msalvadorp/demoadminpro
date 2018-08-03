import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { HttpClient } from "@angular/common/http"
import  swal from 'sweetalert'
//import "rxjs/add/operator/map"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

//import 'rxjs/operators/map';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usuario: Usuario

  constructor(
    public _http: HttpClient) {

      console.log("Servicio listo")
     }

  registrarUsuario(usuario: Usuario){

    console.log("llego al servicio")
    let ruta = "http://localhost:3000/Usuario"
    console.log(ruta)
    return this._http.post(ruta, usuario)
      .pipe(
          map((res : any) => {
            swal("Usuario creado", res.usuario.email, "success")
            return res.usuario
    }))
 

    //this.router.navigate(["/dashboard"])
  }
}
