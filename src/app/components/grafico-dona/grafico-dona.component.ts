import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 @Input() doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input() doughnutChartData:number[] = [350, 450, 100];
 @Input() doughnutChartType:string = 'doughnut';
 @Input() titulo: string = 'Barra tipo Pie'

  constructor() { }

  ngOnInit() {
  }

}
