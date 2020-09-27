import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() eventShowSidebar = new EventEmitter();
  @Input() showSidebar = true;
  constructor() {}

  ngOnInit(): void {}

  metoShowSidebar() {
    this.showSidebar = !this.showSidebar;
    this.eventShowSidebar.emit(this.showSidebar);
  }
  getIcon() {
    return this.showSidebar ? 'close-outline' : 'list-outline';
  }
}
