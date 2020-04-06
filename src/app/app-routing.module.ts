import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: 'colchones', component: ListComponent},
  {path: 'somieres', component: ListComponent},
  {path: "", component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
