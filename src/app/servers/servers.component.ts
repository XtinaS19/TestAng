import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  energ = false;
  cl = false;
  age: string;
  keimeno = '';
  constructor() { 
    setTimeout (() => { this.energ=true;}, 3000);
    this.age = Math.random() > 0.5 ? 'old' : 'young';
    }

  ngOnInit() {
  }

  onClick () {
    this.keimeno = this.keimeno;
    this.cl = true;
  }

  onTyping (event: Event) {
    this.keimeno = (<HTMLInputElement>event.target).value
  }

}
