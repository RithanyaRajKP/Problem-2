import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem2Component } from './problem2/problem2.component';

const routes: Routes = [
  {path:'',component:Problem2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
