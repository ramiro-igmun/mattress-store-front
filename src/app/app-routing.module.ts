import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", component: ListComponent},
  {path: 'colchones', component: ListComponent},
  {path: 'somieres', component: ListComponent},
  {path: 'colchones/:id', component: DetailComponent},
  {path: 'somieres/:id', component: DetailComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
