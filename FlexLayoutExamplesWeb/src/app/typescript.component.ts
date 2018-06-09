import { Component, OnInit } from '@angular/core';
import { Type } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  component: Type<any>;

  constructor() { }

  ngOnInit() {
    //using static method
    this.component = TypescriptComponent;
    console.log('instance name is ' + this.component.name);
  }

}
