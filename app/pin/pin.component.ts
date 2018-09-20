import { Component, OnInit, Type } from '@angular/core';
import { trigger, state, style, animate, transition,
  keyframes, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css'],

  animations: [
    trigger('flyInOut', [

      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          
          style({ opacity: 0, transform: 'translateX(-500px)',
          offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)',
          offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)',
          offset: 1.0 })

        ])) /* animate */
      ]), /* transition */

      transition('* => void', [
        animate(300, keyframes([
          
          style({ opacity: 1, transform: 'translateX(0)',
          offset: 0}),
          style({ opacity: 1, transform: 'translateX(-75px)',
          offset: 0.3 }),
          style({ opacity: 0, transform: 'translateX(500px)',
          offset: 1.0 })

        ])) /* animate */
      ]) /* transition */ 



    ]) /* trigger */
  ] /* animations */

})
export class PinComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  fukinZoom(fukinPinNumber) {
    //console.log('varFukinOrigen='+pin);

    var modal = document.getElementById('fukinModalId');
  
    //var img = document.getElementById("fukinOrigen"+String(pin));
    //var img = document.getElementById("fukinOrigen"+String(fukinPinNumber));
    var img = document.getElementById("fukinOrigen"+fukinPinNumber);
    var modalImg = document.getElementById("fukinImagenModal");
    var captionText = document.getElementById("caption");

      modalImg.setAttribute('src', img.getAttribute('src'));
      modal.style.display = "block";
      //modalImg.src = img.src;
      console.log(modalImg);
      console.log('elOrigen');
      console.log(img);
      captionText.innerHTML = img.getAttribute('alt');
      //captionText.innerHTML = img.alt;

  } /* fukinZoom */

  fukinClose() { 
    var modal = document.getElementById('fukinModalId');
    var span = document.getElementsByClassName("modalCloseButton")[0];
    console.log(span);
    modal.style.display = "none";
  }

  pins = [
    { fukinPinNumber: "1", alt: "locos", item: "item l4" },
    { fukinPinNumber: "2", alt: "jack", item: "item l3" },
    { fukinPinNumber: "3", alt: "team", item: "item l1" },
    { fukinPinNumber: "4", alt: "poseidon", item: "item l2" },
    { fukinPinNumber: "5", alt: "guiness", item: "item l3" },
    { fukinPinNumber: "6", alt: "time machine", item: "item l5" },
    { fukinPinNumber: "7", alt: "coaching", item: "item l1" }
  ]



} /* export class */
