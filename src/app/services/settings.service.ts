import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl : "assets/css/colors/default.css",
    tema : "default"
  }
  constructor() { 
    this.cargarAjustes()

  }

  guardarAjustes(){
    console.log("guardado en el local storage")
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes))
  }

  cargarAjustes(){
    if(localStorage.getItem("ajustes")){
      console.log("Cargando de localstorage")
      this.ajustes = JSON.parse(localStorage.getItem("ajustes"))
    }
    else {
      console.log("Asignando valores por defecto")

    }
  }
}

interface Ajustes {
  temaUrl: string,
  tema: string

}