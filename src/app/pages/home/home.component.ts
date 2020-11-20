import { Component, OnInit } from '@angular/core';
import {ORDERS} from '../../datas/mock-orders';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders = ORDERS;
  public user: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('coucou')
    if (localStorage.getItem('userInfo') == null){
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('userInfo'));
      console.log(this.user);
    }
  }

}
