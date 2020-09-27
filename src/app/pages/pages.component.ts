import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  showSidebar = true;
  constructor() {}

  ngOnInit() {}

  onEventSidebar(event: boolean) {
    this.showSidebar = event;
    console.log('eventooo', this.showSidebar);
  }
}
