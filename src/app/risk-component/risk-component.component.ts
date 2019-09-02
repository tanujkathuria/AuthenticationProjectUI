import { Component, OnInit } from '@angular/core';
import {RiskServiceService} from '../services/risk-service.service';

@Component({
  selector: 'app-risk-component',
  templateUrl: './risk-component.component.html',
  styleUrls: ['./risk-component.component.less']
})
export class RiskComponentComponent implements OnInit {

  risks : any;

  constructor(private riskServiceService:RiskServiceService) { }


  ngOnInit() {
    this.riskServiceService.getRisks().subscribe(
      response => {
        console.log(response);
        this.risks = response;
      },
      error => {
        console.log(error);
      }

    )
  }

  addRisk(f) {
    console.log(f);
    console.log(f.value.riskId + f.value.status+ f.value.title+ f.value.owner+ f.value.createdBy+ f.value.organization);
    this.riskServiceService.addRisk(f.value.riskId, f.value.status, f.value.title, f.value.owner, f.value.createdBy, f.value.organization)
      .subscribe(
        response => {
          console.log(response);
          if(response['status'] == 200){
            console.log('status is ok')
          }
        },
        ( error:Response) => {
          console.log(error);
          this.error=true;
        }
      )
  }

  deleteRisk(riskId){
    console.log(riskId+ "" + "to be deleted ");
    this.riskServiceService.deleteRisk(riskId).subscribe(response =>{
      console.log(response);
    })
  }


}
