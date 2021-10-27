import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  constructor() { }

  name=''
Username='';
phone:any;

dblogic(myname:any){
  console.log("Hi This is printing")
  this.name=myname
}

username(username:any,phone:any){

  this.Username=username;
  this.phone=phone;
  console.log(this.Username)

}

}
