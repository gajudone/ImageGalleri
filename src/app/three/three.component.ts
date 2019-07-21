import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent  {

  constructor() { }
  
@Output() oT = new EventEmitter();

  onChange(e:string) {
    this.oT.emit(e);
  }

}
