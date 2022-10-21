import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getPosts()
  {

  }

  showPosts()
  {

  }


}
