import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
    path:'',component:HomepageComponent
  }
  
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomepageModule { 
  constructor(){
    console.log("HI HOMEPAGE MOD")
  }
}
