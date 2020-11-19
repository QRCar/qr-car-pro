import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import * as R from 'ramda';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-connection',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.scss']
})
export class FormConnectionComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    if (f.valid){
      this.http.get<any>(`${environment.USER_URL_API}/api/users`).subscribe(
        data => {console.log(data);
                 const dataUser = data.data;
                 const user = R.find(R.propEq('email', f.value.email))(dataUser);
                 console.log('user', user);
                 if(user !== undefined){
                   localStorage.setItem('userInfo', JSON.stringify(user));
                   this.router.navigate(['/']);
                 } else{
                   localStorage.removeItem('userInfo');
                   this.router.navigate(['/login']);
                 }
        },
        err => {console.error(err); },
        () => console.log('done')
      );
    }
  }
}
