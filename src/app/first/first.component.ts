
    
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';
import {  ElementRef } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
declare var jQuery: any; 
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  inputs: ['pData'],  
  outputs:['cEvent'],
  animations: [
    trigger('movementtrigger', [
      
      transition('void => *', [
        style({opacity: 0, background: 'lightyellow', transform: 'translateX(-100%)'}),
        animate('200ms ease-in-out', style({opacity: 1, background: 'white', transform: 'translateX(0%)'}))
      ])
    ])
  ]
  

})
export class FirstComponent implements OnInit{
  state:string = 'firstpos'; outlet;
add(outlet){
    this.state = (this.state==='firstpos' ? 'secondps': 'firstpos'); 
    console.log("called from first " + this.state);
}
  constructor(private elRef: ElementRef ){

  }
  ngOnInit(): any {
    jQuery(this.elRef.nativeElement).find(document).ready(function(){
      jQuery('.row').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true},
        removalDelay: 200, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
            // just a hack that adds mfp-anim class to markup 
            console.log("enters");
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
	preloader: true,
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.                
      });
     
    });
   
  }
 public pData:string;
 imagePath = "assets/images/tm-img-01-tn.jpg";
  imgp = "assets/images/tm-img-02-tn.jpg"
 
}
window.addEventListener('polymer-ready', function(e) {
  alert("polymenr");
});
