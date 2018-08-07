import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Observable, Subscriber, Subscription } from 'rxjs';
import { Observable } from "rxjs"
import { Subscriber } from "rxjs"
import { Subscription } from "rxjs"
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rsjs',
  templateUrl: './rsjs.component.html',
  styles: []
})
export class RsjsComponent implements OnInit, OnDestroy {

  suscripcion : Subscription

  constructor() { 
    
    this.suscripcion = this.regresaObservable().
      pipe(
        retry(2)
      ).subscribe(
          numero => {
      console.log('subs', numero)
      }, error => console.log("hubo errores", error),
    ()=> {console.log("Se termino el subscribe")})


  }

  ngOnInit() {
  }


  ngOnDestroy(){
    console.log("Cerrando la pagina")
    this.suscripcion.unsubscribe()
  }

  regresaObservable(){

    return new Observable<any>( (observer: Subscriber<any>) => {

      let contador = 0
      let intervalo = setInterval(()=>{
        contador +=1

        const salida = {
          valor: contador
        }

        observer.next(salida)

        if (contador === 3) {
          //clearInterval(intervalo)
          //observer.complete()
        }
/*
        if (contador === 2) {
          //clearInterval(intervalo)
          observer.error("auxilio")
        }*/


      }, 1000)

    }).pipe(
      map(resp => {
        return resp.valor
      }), 
      filter((valor, index) => {
        //console.log("Filter",valor, index)
        if ((valor % 2) === 1)
        {
          return true
        }
        else
        {
          return false
        }
       
      })
    )
  }
}
