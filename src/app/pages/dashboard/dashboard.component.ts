import { Component, OnInit } from '@angular/core';
import { DashboardService } from './api/dashboard.service';
import { Account } from './interface/account';
import { Task } from './interface/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  botones: string[];
  dataTask?: Task;
  dataAccount?: Account;
  constructor(private dashService: DashboardService) {
    this.botones = ['Tipo de documento', 'Ingresa nro de documento', 'BUSCAR'];
  }

  ngOnInit(): void {
    this.dashService.getAccount().then(
      (result: Account) => {
        console.log('result getAccount', result);
        this.dataAccount = result;
        // Object.keys(this.dataAccount).forEach((element:string)=>
        //   console.log("propiedad",this.dataAccount[element])
        // )
      },
      (error: any) => {
        console.log('error getAccount', error);
      },
    );

    this.dashService.getTask().then(
      (result: Task) => {
        console.log('result getTask', result);
        this.dataTask = result;
      },
      (error: any) => {
        console.log('error getTask', error);
      },
    );
  }
}
