import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }

  psEraser(post) {
    for(let i=0; i < this.posts.length; i++) {
      if(post == this.posts[i]) {
        this.posts.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

}
