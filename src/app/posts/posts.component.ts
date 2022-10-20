import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsondataService } from '../jsondata.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  page:number = 1; 

  posts: any;


  constructor(private data: JsondataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      (data: any) => this.posts = data
    )
  }

}
