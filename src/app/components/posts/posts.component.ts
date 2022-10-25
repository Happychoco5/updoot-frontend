import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';




import { Thread } from 'src/app/models/thread/thread';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  threads: Thread[] = [];
  
  ngOnInit(): void {
    this.getThreads();
  }

  getThreads(){
    this.postService.getThreads().subscribe(
      (res) =>{
        this.threads = res;
      },
      (err) => {
        console.log(err)
      }
    );
  }
  showPosts()
  {

  }


}
