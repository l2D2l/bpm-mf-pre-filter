import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { HelpModule } from './pages/help/help.module';
import { LogoutModule } from './pages/logout/logout.module';
import { ReportsModule } from './pages/reports/reports.module';
import { TasksModule } from './pages/tasks/tasks.module';
import { AccountModule } from './pages/account/account.module';
import { SalesModule } from './pages/sales/sales.module';
import { ErrorModule } from './error/error.module';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AccountComponent } from './pages/account/account.component';
import { LogoutComponent } from './pages/logout/logout.component';

const modules = [
  AccountModule,
  SalesModule,
  // DashboardModule,
  HelpModule,
  LogoutModule,
  ReportsModule,
  TasksModule,
  // ErrorModule
];

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/sales', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'sales', component: SalesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'logout', component: LogoutComponent },
    ],
  },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [...modules, RouterModule.forRoot(routes, { useHash: true })],
  exports: [...modules, RouterModule],
})
export class AppRoutingModule {}
