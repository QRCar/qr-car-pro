import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartScales } from 'chart.js';
import { Label, Color,} from 'ng2-charts';

@Component({
  selector: 'app-chart-amount',
  templateUrl: './chart-amount.component.html',
  styleUrls: ['./chart-amount.component.scss']
})
export class ChartAmountComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }],
    },
  };

  public barChartLabels: Label[] = ['27 oct.', '28 oct.', '29 oct.', '30 oct.','31 oct.', '1 nov.', '2 nov.', '3 nov.', '4 nov.', '5 nov.', '6 nov.','7 nov.', '8 nov.', '9 nov.', '10 nov.', '11 nov.', '12 nov.', '13 nov.','14 nov.', '15 nov.', '16 nov.', '17 nov.', '18 nov.', '19 nov.', '20 nov.'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartScales: ChartScales = { 
    xAxes: [{
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      }
    }],
  }
  public barChartColors: Color[] = [
    { backgroundColor: '#A476EF' },
  ]

  public barChartData: ChartDataSets[] = [
    { data: [328, 156, 80, 249, 167, 508, 124, 328, 156, 80, 249, 167, 508, 124, 328, 156, 80, 249, 167, 508, 124, 328, 156, 80, 75], label: 'Series A' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}

