import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name= new FormControl('');
  updateName(){
    this.name.setValue("vaishali");
  }

}
