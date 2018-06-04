import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'; 


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('titulo') leyenda : string = "Leyenda"
  @Input() progreso: number = 50

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter()

  @ViewChild("txtProgreso") txtProgreso : ElementRef
  constructor() { 
    console.log("progreso", this.progreso)

  }

  ngOnInit() {
    console.log("progreso", this.progreso)
  }

  
  cambiarValor(cantidad :number) {

    if(this.progreso >= 100 && cantidad > 0){
      this.progreso = 100
      return
    }

    if(this.progreso <= 0 && cantidad < 0){
      this.progreso = 0
      return
    }

    this.progreso += cantidad

    this.cambioValor.emit(this.progreso)
    this.txtProgreso.nativeElement.focus()
  }

  onChanges(newValue: number){

    //let elementHTML:any = document.getElementsByName('progreso')[0]

    if (newValue >= 100) {
      this.progreso = 100
    }
    else if (newValue <= 0) {
      this.progreso = 0
    }
    else {
      this.progreso = newValue
    }

    //elementHTML.value = this.progreso
    this.txtProgreso.nativeElement.value = this.progreso
    this.cambioValor.emit(this.progreso)
    console.log(this.progreso)
  }
}
