import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPosts: Post[] = [
    new Post (
      'Road Bike',
      'Road Bike are best identified by their drop or turned-down and skinny tires. The downward-curving handnnnnnnnnnnnnnnn',
      'https://assets.vogue.com/photos/597a5be4ba90bc32d772dde3/master/w_1600,c_limit/00-tout-exo.jpg',
      'chuchu@test',
      new Date()
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
