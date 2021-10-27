import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private xzz:ServiceDemoService) { }
name=''
  ngOnInit(): void {
  }
  adc(){
   this.name= this.xzz.name;
  }
}
