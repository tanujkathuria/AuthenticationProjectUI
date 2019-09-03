import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {

  private url = "http://localhost:8080/getRoles/";

  constructor(private http: Http) { }

  public getRole(roleId) {
    return this.http.get(this.url + roleId);
  }


}
