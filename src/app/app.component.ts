import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    console.log('router constructor', this.router.config);
  }

  ngOnInit() {
    this.router.initialNavigation();
    console.log('router ngOnInit', this.router.config);
  }
}
