import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyprofileService } from '../myprofile.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
profileimagesUrl:string="../../assets/vaishali.jpg";
  public myFinalProfile=[];
  constructor(private myprofile:MyprofileService) { }

  ngOnInit() {
    this.myprofile.getprofile().subscribe(demo=>this.myFinalProfile=demo);
    

  };

}
