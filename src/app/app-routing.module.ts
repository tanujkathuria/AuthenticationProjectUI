import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponentComponent} from './login-component/login-component.component';
import {RiskComponentComponent} from './risk-component/risk-component.component';



const routes: Routes = [
  {path : '' , component: LoginComponentComponent},
  {path : 'risk' , component: RiskComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
