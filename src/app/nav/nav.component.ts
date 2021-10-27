import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router){

  }
  xyz(){
    this.router.navigateByUrl('othersites/chennai')
    
  }
  mumbai(){
    this.router.navigateByUrl('othersites/mumbai')
  }
  single(){
    this.router.navigateByUrl('properties/singlepropert')
  }
  gallery(){
    this.router.navigateByUrl('properties/gallery')
  }
  kerala(){
    this.router.navigateByUrl('othersites/kerala')
  }
}
