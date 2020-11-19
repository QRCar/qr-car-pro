import { Component, Input, OnInit } from '@angular/core';
import {changeDateToMoment, changeMomentToDate, dateIsToday, dateIsYesterday, dateIsBefore6Months} from '../../utils/date_contantes'
import * as R from 'ramda';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})



export class TableComponent implements OnInit {
  
  @Input() items: Object;
  @Input() currentDate : string;
  
  listDateToday: Array<Object>;
  listDateYesterday: Array<Object>;
  listDateSixMonth: Array<Object>;

  orderByDate(obj){
    let mappedDate = R.map(changeDateToMoment, obj);
    let sortByDate = R.reverse(R.sortBy(R.prop("date"))(mappedDate));
    let transformedDateSorted = R.map(changeMomentToDate, sortByDate);

    return transformedDateSorted;
  }

  getDateToday(obj){
    return R.filter(dateIsToday, obj)
  }

  getDateYesterday(obj){
    return R.filter(dateIsYesterday, obj)
  }

  getDateSixMonth(obj){
    return R.filter(dateIsBefore6Months, obj)
   }

  constructor() {

  }
  
  ngOnInit(): void {
    this.items = this.orderByDate(this.items);
    this.listDateToday = this.getDateToday(this.items);
    this.listDateYesterday = this.getDateYesterday(this.items);
    this.listDateSixMonth = this.getDateSixMonth(this.items);
  }
}
