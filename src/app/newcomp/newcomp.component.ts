import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  
  NameDays= ['Monday', 'Tuesday', 'Wednesday']; 
  RandomBool= Math.random() > 0.5; true : false;

  constructor() { }

  ngOnInit() {
  }

}
