import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  principle:any;
  month:any;
  rate:any;
emi:any;
  rateOfIntrest="";
 b:any;
 nameprint="";
 phoneprint:any;
constructor(private name:ServiceDemoService) 
{
  this.nameprint=this.name.Username;
  this.phoneprint=this.name.phone;
  console.log(this.nameprint);
}

mydata="";






abc(e:any)
{   
  this.rateOfIntrest=e.target.value;
}
//   select(myval1:any){
//       if(myval1=="Home"){
//         this.rateOfIntrest=8;
//       }
//       if(myval1=="Vehicle"){
//         this.rateOfIntrest=7;
//       }
//       if(myval1=="Personal"){
//         this.rateOfIntrest=12;
//       }
//       if(myval1=="Education"){
//         this.rateOfIntrest=10;
//       }
// }


cal(principle:any,month:any,rate:any)
  
{
    this.principle=principle;
    this.month=month;
    this.rate=rate;
    var a=this.principle*this.month*this.rate;
    this. b=a/100;
    this.emi=principle*rate*(1+rate)*month
    this.emi=this.emi/((1+rate)*month-1)

    console.log(this.emi)
}

  ngOnInit(): void {
  }

}
