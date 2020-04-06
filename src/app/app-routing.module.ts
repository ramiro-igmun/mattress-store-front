import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: 'colchones', component: ListComponent},
  {path: 'somieres', component: ListComponent},
  {path: "", component: ListComponent},
  {path: 'colchones/:id', component: DetailComponent},
  {path: 'somieres/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
