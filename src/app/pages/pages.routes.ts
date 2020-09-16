import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';
import { HelpComponent } from './help/help.component';
import { ReportsComponent } from './reports/reports.component';
import { TasksComponent } from './tasks/tasks.component';
import { AccountComponent } from './account/account.component';
import { ClientsComponent } from './clients/clients.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'help', component: HelpComponent },
      { path: 'logout', component: LogoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
