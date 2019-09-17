import { Component, OnInit } from '@angular/core';
import { MydetailserviceService } from '../mydetailservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public myFinalDetails=[];
  constructor(private mydetail:MydetailserviceService) { }

  ngOnInit() {
    this.mydetail.getdetails().subscribe(demo=>this.myFinalDetails=demo);
  }


};
