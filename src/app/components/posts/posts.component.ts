import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { UpdootService } from 'src/app/services/updoot/updoot.service';



import { Thread } from 'src/app/models/thread/thread';
import { Router } from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService, private router:Router) { }

  threads: Thread[] = [];
  
  ngOnInit(): void {
    this.getThreads();
  }

  getThreads(){
    this.postService.getThreads().subscribe({
      next:(res) =>{
        this.threads = res.sort((thred1, thred2) => {
          return thred2.epoch - thred1.epoch;
        });
      },
      error:(err) => {
        console.log(err)
      }
    });
  }
  showPosts()
  {

  }
}
