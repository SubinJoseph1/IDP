import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';
@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(private xyz:ServiceDemoService) { }
name=""
  ngOnInit(): void {
  }
  adb(){
   this.name= this.xyz.name;
  }
}
