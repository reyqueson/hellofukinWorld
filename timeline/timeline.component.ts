import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  twTexts = ['fukinWorldRockstar','stopWars','just do it','sons of anarchy Rocks!','Tiff is Love','King loves Tiff'];
  twFirmas = ['SODA','MarketingMachine'];
  activated: boolean = false;
  author: string = 'Hemingway';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  twEraser(twText) {
    for(let i=0; i < this.twTexts.length; i++) {
      if(twText == this.twTexts[i]) {
        this.twTexts.splice(i, 1);
      }
    }
  }

  posts = [];

  constructor() {
    this.age = 28;
    this.address = {
      street: 'Carlos Greene 119',
      city: 'London'
    };
    this.hobbies = ['runnin','cinepolis','code'];
  }

  ngOnInit() {
  }
}
