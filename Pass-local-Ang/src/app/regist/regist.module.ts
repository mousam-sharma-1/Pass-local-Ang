import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistComponent } from './regist.component';

const routes: Routes = [
 
  {
    path:'',component:RegistComponent
  }
  
];

@NgModule({
  declarations: [RegistComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RegistModule { }
