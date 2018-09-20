import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } 
    from '@angular/animations';



@Component({
  selector: 'fukinAnimoto',
  template: `
  <div class="container">
     <div *ngFor="let pin of pins" class="item l{{pin.box}}">
      <img id="fukinOrigen{{pin.fkN}}" 
      src="assets/img/pix{{fukinRandom()}}.jpg" 
      alt="{{pin.alt}}"
      (click)="fukinZoom(pin.fkN)"    
      >
      
     </div>
     <div class="sub">Hello ladies {{ mensajedelRey }}</div>
  </div>
  
  `,
  styles: [`
      .sub { 
        margin: auto; font-size: 24px; 
        width: 400px; text-align: center;
      }
      .l1 { background: red; }
      .l2 { background: silver; }
  `], //se invalidan
  styleUrls: ['animoto.css'],

  animations: [
    trigger('flyInOut', [
    
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate(300, keyframes([
            style({opacity: 0, transform: 'translateX(-500px)', offset: 0}),
            style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
        
        transition('* => void', [
          animate(300, keyframes([
            style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
            style({opacity: 1, transform: 'translateX(-75px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateX(500px)',  offset: 1.0})
          ]))
        ]),
  
      ])
  ]

})
export class animotoComponent {
  mensajedelRey = '#fukinJagger';

  fukinRandom(){
    var x = Math.floor((Math.random() * 7) +1);
    console.log('da random x is = ', x);
    return x;
  }

  pins = [
    { fkN: 1, alt: "locos", box: "l4" },
    { fkN: 2, alt: "jack", box: "l3" },
    { fkN: 3, alt: "team", box: "l1" },
    { fkN: 4, alt: "poseidon", box: "l2" },
    { fkN: 5, alt: "guiness", box: "l3" },
    { fkN: 6, alt: "time machine", box: "l5" },
    { fkN: 7, alt: "coaching", box: "l1" }
  ]

  

}
