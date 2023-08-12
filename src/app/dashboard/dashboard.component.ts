import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 fName:string=""
 lName:string=""
 desg:string=""
 age:string=""
 userName:string=""

constructor(private dashBoardService:DataService){
  this.userName=dashBoardService.loginUsername
}
 update(){
  alert( `${this.fName} ${this.lName} ${this.desg} ${this.age}`)
 }
}
