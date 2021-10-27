import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  ngOnInit(): void {
  }
  array1:any
   

  constructor(private router:Router) { }

login(Name:any,Password:any,phone:any){

    this.array1={
    "Username":Name,
    "Password":Password,
    "Phone":phone
  }




  console.log(this.array1)


 

  localStorage.setItem("Username",Name);
  localStorage.setItem("Password",Password);
  localStorage.setItem("Phone",phone);

}

reg(){
  this.router.navigateByUrl('loginPage');
}

}
