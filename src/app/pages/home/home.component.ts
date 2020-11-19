import { Component, OnInit } from '@angular/core';
import {ORDERS} from '../../datas/mock-orders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders = ORDERS;

  constructor() {
    console.log(this.orders);
  }

  ngOnInit(): void {
  }

}
