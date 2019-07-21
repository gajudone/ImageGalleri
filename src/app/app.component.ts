

import { Component, OnInit, ElementRef, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { $ } from 'protractor';
declare var jQuery: any;  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
 
s(){ console.log("pppppppppppp");}

constructor(private elRef: ElementRef ){

}
ngOnInit(): any {
  jQuery(this.elRef.nativeElement).find("#abcd").click(function(){
    jQuery("body, html").animate({scrollTop: 0}, 500);
  });
  
 
}
  title = 'app';
  public cData: string;
  imagePath = "assets/images/abc.png";
  
}

