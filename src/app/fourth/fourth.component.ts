import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor() { }
@Output() pO = new EventEmitter()

  ngOnInit() {
  }
  onChang(e:string){
    this.pO.emit(e);
  }
}
