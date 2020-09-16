import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vdst-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  botones: string[];
  constructor() {
    this.botones = ['Tipo de documento', 'Ingresa nro de documento', 'BUSCAR'];
  }

  ngOnInit(): void {}
}
