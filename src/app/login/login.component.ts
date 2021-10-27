import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  ngOnInit(): void {
  }

  myname:any;
 mypass:any;
  constructor(private router:Router) { }

  register(Username:any,Password:any){
  
  this.myname= localStorage.getItem("Username");
  this.mypass= localStorage.getItem("Password");

  if(Username==null||Username==""){
    alert("Please Provide name");
  }
  else  if(Password==null||Password==""){
    alert("Please Provide Password")
  }

    else 
  if((this.myname==Username)&&(this.mypass==Password) ){

      alert("logged in")
      this.router.navigateByUrl("**")
    }
    else{
      alert("Sorry Invalid Username/Password")
    }
  }

  Log(){
    this.router.navigateByUrl('registerPage')
  }


}
