import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-connection',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.scss']
})
export class FormConnectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  HandleSubmit(){
    console.log('isLoggedIn')
  }

}
