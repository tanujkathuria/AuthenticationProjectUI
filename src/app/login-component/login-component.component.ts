import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.less']
})
export class LoginComponentComponent implements OnInit {


  error=false;

  constructor(private loginService:LoginServiceService,private router:Router) {

    if(localStorage.getItem('userName')){
      console.log('already stored in local storage')
    }

  }

  log(f){
    console.log(f);
    this.loginService.isLoginOk(f.value.email,f.value.pass)
      .subscribe(
        response => {
          this.error=false;
          console.log(response.json());
          localStorage.setItem('userName',f.value.email);
          localStorage.setItem('userId',response.json().emailId);
          localStorage.setItem('lastLogin',new Date().toString());
          this.router.navigate(['excelComponent']);
        },
        ( error:Response) => {
          console.log(error);
          this.error=true;
        }
      )
  }


  ngOnInit() {
  }

}
