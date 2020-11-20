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
