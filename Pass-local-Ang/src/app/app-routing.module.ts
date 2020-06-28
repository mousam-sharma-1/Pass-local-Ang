import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: 'home',
     pathMatch: 'full' 
    // component:AppComponent
},
{
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'home',
    // loadChildren:'./homepage/homepage.module#HomepageModule'
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path:'registration',
    loadChildren: () => import('./regist/regist.module').then(m => m.RegistModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
