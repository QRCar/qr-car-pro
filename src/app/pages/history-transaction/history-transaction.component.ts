import { Component, OnInit } from '@angular/core';
import {TRANSACTIONS} from '../../datas/mock_transactions'

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.component.html',
  styleUrls: ['./history-transaction.component.scss']
})
export class HistoryTransactionComponent implements OnInit {

  transactions = TRANSACTIONS;

  constructor() { }


  ngOnInit(): void {
  }

}
