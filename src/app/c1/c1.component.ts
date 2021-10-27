import { Component, OnInit } from '@angular/core';
import { ServiceDemoService } from '../service-demo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private xyz:ServiceDemoService) {}

  ngOnInit(): void {
  }

  abc(myname:any){
     this.xyz.dblogic(myname);

  }

}
