import { Component, OnInit } from '@angular/core';
import {TRANSACTIONS} from '../../datas/mock_transactions'
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.component.html',
  styleUrls: ['./history-transaction.component.scss']
})
export class HistoryTransactionComponent implements OnInit {

  transactions = TRANSACTIONS;
  currentDate: string = "Aujourd'hui";
  currentDate2: string = "Hier";
  currentDate3: string = "13 novembre";
  currentDate4: string = "14 novembre";

  constructor(private router : Router) { }

  user : any;


  ngOnInit(): void {
    if (localStorage.getItem('userInfo') == null){
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('userInfo'));
    }
  }

}
