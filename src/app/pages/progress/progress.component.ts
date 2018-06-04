import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  leyenda: string = ''

  progreso1: number = 25;
  progreso2: number = 75;
  constructor() { }

  ngOnInit() {
  }

  actualizar(event: number){

    console.log("cambio ", event)
    this.progreso1 = event
  }

}
