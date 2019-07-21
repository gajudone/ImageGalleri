import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EventEmitter} from '@angular/core';
import {  trigger, state, style, transition, animate, keyframes } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  outputs: [ 'oEvent', 'sEvent'],
  animations: [
    trigger('movementtrigger', [
      
      transition('void => *', [
        style({opacity: 0, background: 'lightyellow', transform: 'translateX(-100%)'}),
        animate('200ms ease-in-out', style({opacity: 1, background: 'white', transform: 'translateX(0%)'}))
      ])
    ])
  ]
})
export class SecondComponent implements OnInit, AfterViewInit {
  
  state:string = 'firstpos';

  ngAfterViewInit() {
   
  }
  
add(abc){
    this.state = (this.state==='firstpos' ? 'secondps': 'firstpos'); 
}
  
  
  constructor() { }
 // public sData;

  sEvent = new EventEmitter();
  oEvent = new EventEmitter();
  onChange(value:string, val:string) {
    this.oEvent.emit(value);
     this.sEvent.emit(val);
  }
  ngOnInit() {
      
  }

}
