import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rsjs',
  templateUrl: './rsjs.component.html',
  styles: []
})
export class RsjsComponent implements OnInit {

  constructor() { 
    let obs = new Observable(observer => {

      let contador = 0
      let intervalo = setInterval(()=>{
        contador +=1
        observer.next(contador)

        if (contador === 3) {
          clearInterval(intervalo)
          observer.complete()
        }

        if (contador === 2) {
          //clearInterval(intervalo)
          observer.error("auxilio")
        }


      }, 1000)

    })

obs.pipe(
  retry(2)
).subscribe(
      numero => {
      console.log('subs', numero)
      }, error => console.log("hubo errores", error),
    ()=> {console.log("Se termino el subscribe")})


  }

  ngOnInit() {
  }

}
