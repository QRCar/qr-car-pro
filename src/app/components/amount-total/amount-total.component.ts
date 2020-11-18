import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-total',
  templateUrl: './amount-total.component.html',
  styleUrls: ['./amount-total.component.scss']
})
export class AmountTotalComponent implements OnInit {
  @Input() name : String;
  @Input() amount : Number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
