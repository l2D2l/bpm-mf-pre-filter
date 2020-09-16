import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
