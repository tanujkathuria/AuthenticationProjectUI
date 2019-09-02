import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {LoginServiceService} from './services/login-service.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RiskComponentComponent } from './risk-component/risk-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RiskComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
