import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiskServiceService {

  private url ="http://localhost:8080/riskDetails";
  private postURL = "http://localhost:8080/AddRisk";
  private deleteURL = "http://localhost:8080/DeleteRisk/";

  constructor(private http: HttpClient) { }

  public getRisks(){
    return this.http.get(this.url);
  }


  public addRisk(riskId,status,title,owner,createdBy,organization){
    let risk = JSON.parse(JSON.stringify({
        "riskId" : riskId,
        "title" : title,
        "status" : status,
        "level" : "Level-3",
        "owner" : owner,
        "manager" : "Anee D",
        "organization" : organization,
        "createdOn" : "2018-04-23T18:25:43.511Z",
        "createdBy" : createdBy,
        "approvedBy" : "Anee D",
        "approvedOn" : "2018-04-23T18:25:43.511Z"
      }
    ));
    console.log(risk);
    return this.http.post(this.postURL,risk);
  }

  public deleteRisk(riskId){
    return this.http.delete(this.deleteURL+riskId);

  }
}
