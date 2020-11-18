import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items: Object;
  @Input() currentDate : string;


  constructor() { 
  }

  ngOnInit(): void {
  }

}
