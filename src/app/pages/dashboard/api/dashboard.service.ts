import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from './../interface/account';
import { Task } from './../interface/task';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string;
  httpOptions: any;
  constructor(public http: HttpClient) {
    this.apiUrl = `http://localhost:2001/`;
    // this.apiUrl=`${AppConfig.URL_BK_API}`;

    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'auth': localStorage.getItem('sessionTokenId')
    //   })
    // };
  }

  getAccount() {
    return new Promise<Account>((resolve, reject) => {
      this.http.post<Account>(`${this.apiUrl}account/user-profile/v1.0`, 'hola').subscribe(
        (res: Account) => {
          console.log(res);
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }

  getTask() {
    return new Promise<Task>((resolve, reject) => {
      this.http.post<Task>(`${this.apiUrl}task/evaluate/v1.0`, 'hola').subscribe(
        (res: Task) => {
          console.log(res);
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }
}
