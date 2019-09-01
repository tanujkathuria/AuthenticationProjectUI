import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExcelComponentComponent} from './excel-component/excel-component.component';
import {LoginComponentComponent} from './login-component/login-component.component';



const routes: Routes = [
  {path : '' , component: LoginComponentComponent},
  {path : 'excelComponent' , component: ExcelComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
