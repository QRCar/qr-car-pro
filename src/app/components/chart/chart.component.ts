import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartScales } from 'chart.js';
import { Label, Color,} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

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
  
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
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
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
