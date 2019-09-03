import {Component, OnChanges, OnInit} from '@angular/core';
import {RiskServiceService} from '../services/risk-service.service';
import {RolesServiceService} from '../services/roles-service.service';

@Component({
  selector: 'app-risk-component',
  templateUrl: './risk-component.component.html',
  styleUrls: ['./risk-component.component.less']
})
export class RiskComponentComponent implements OnInit,OnChanges {

  risks : any;
  riskId:any;
  role: any;
  add_show:boolean = false;
  edit_show:boolean =false;
  delete_show:boolean =false;


  constructor(private riskServiceService:RiskServiceService,private rolesService: RolesServiceService) { }


  ngOnInit() {

    this.role = localStorage.getItem('roles');
    this.rolesService.getRole(this.role).subscribe(
      response =>{
        console.log(response.json().addAccess);
        console.log(response.json().editAccess);
        console.log(response.json().deleteAccess);
        if(response.json().addAccess == 'Y'){
          this.add_show = true;
        }
        if(response.json().editAccess == 'Y'){
          this.edit_show = true;
        }
        if(response.json().deleteAccess == 'Y'){
          this.delete_show = true;
        }
        console.log(this.add_show);
        console.log(this.edit_show);
        console.log(this.delete_show);
      },
      error => {
        console.log(error);
      }
    );


    console.log(this.role);
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

  addRisk = (f) => {
    console.log(f);
    console.log(f.value.riskId + f.value.status+ f.value.title+ f.value.owner+ f.value.createdBy+ f.value.organization);
    this.riskServiceService.addRisk(f.value.riskId, f.value.status, f.value.title, f.value.owner, f.value.createdBy, f.value.organization)
      .subscribe(
        response => {
          console.log(response);
          console.log(this.risks);
          this.risks.push(response);
          console.log(this.risks)
        },
        ( error:Response) => {
          console.log(error);
          this.error=true;
        }
      )
  }

  deleteRisk = (riskId) =>{
    console.log(riskId+ "" + "to be deleted ");
    this.riskId = riskId;
    this.riskServiceService.deleteRisk(riskId)
      .subscribe(response => {
          this.risks = this.risks.filter(
            (risk) => {
              console.log("within the filter rik coming from array")
              console.log(risk);
              console.log("risk id to be filtered")
              console.log(this.riskId);
              return risk.riskId != this.riskId;
            }
          )
        }
       ,
      ( error:Response) => {
        console.log(error);
        this.error=true;
      })
  }


}
