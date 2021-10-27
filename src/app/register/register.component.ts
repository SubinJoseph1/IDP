import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDemoService } from '../service-demo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  ngOnInit(): void {
  }
 
  lusernmae:string="";
  lpassword="";
  lemail="";


  constructor(private router:Router,private service:ServiceDemoService) {

     }
  
login(Name:any,Password:any,phone:any){
  if(Name==""|| Password=="" ||phone=="" ){
    alert("Please provide value");
    return;
  }
  this.service.username(Name,phone);
    let array1={
      lusernmae:Name,
      lpassword:Password,
      lemail:phone
  }




  // console.log(this.array1)


  localStorage.setItem(Name,JSON.stringify(array1));
  
  

  // localStorage.setItem("Username",Name);
  // localStorage.setItem("Password",Password);
  // localStorage.setItem("Phone",phone);
 
  this.router.navigateByUrl('loginPage');
}

reg(){
  this.router.navigateByUrl('loginPage');
}

}
