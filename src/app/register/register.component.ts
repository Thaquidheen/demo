import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private regRouter:Router){}

   register(username:any,pswd:any){
       alert(`${username.value}, ${pswd.value}`)
       this.regRouter.navigateByUrl("")
   }
}
