import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
   
    this.contarTres().then((mensaje) => console.log("Procesado", mensaje)).catch(error => console.log("Errores ", error))

  }

  ngOnInit() {
  }


  contarTres(): Promise<boolean>{
    let contador = 0
    return new Promise((resolve, reject) => {

      let intervalo = setInterval(()=> {
         contador += 1
         console.log("proceso", contador)
 
         if (contador === 3) {
           resolve(true)
           clearInterval(intervalo)
         }
       }, 1000)
 
     })

  }

}
