import { Component, OnInit } from '@angular/core';

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
constructor() {}

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
    this.emi=(principle-this.b)/month;
    console.log(this.emi)
}

  ngOnInit(): void {
  }

}
