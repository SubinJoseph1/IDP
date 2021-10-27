import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  constructor() { }

  name=''


dblogic(myname:any){
  console.log("Hi This is printing")
  this.name=myname
}

}
