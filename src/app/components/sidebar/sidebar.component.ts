import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() userInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUserInfo(): void {
    localStorage.removeItem('userInfo');
  }
}
