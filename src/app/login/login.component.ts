import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


title:string="Login Form"
imgUrl:string='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
password:string=""
username:string=""
constructor(private logRouter:Router,private logService:DataService){}
usernameChange(event:any){
this.username=event.target.value
}
passwordChange(event:any){
this.password=event.target.value
}

login(){
  if(this.password && this.username){
    this.logService.loginUsername=this.username
    alert(`${this.password},${this.username}`)
    this.logRouter.navigateByUrl("dashboard")
  }else{
    alert('please fill the form completetly')
  }
}



}
