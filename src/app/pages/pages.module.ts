import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { LogoutComponent } from './logout/logout.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    PagesComponent,
    ClientsComponent,

    LogoutComponent,
    TasksComponent,
    ReportsComponent,
    AccountComponent,
    HelpComponent,
    DashboardComponent,
  ],
  exports: [
    PagesComponent,
    ClientsComponent,

    LogoutComponent,
    TasksComponent,
    ReportsComponent,
    AccountComponent,
    HelpComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
