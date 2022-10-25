import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account/account';
import { Thread } from 'src/app/models/thread/thread';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }
  threads: Thread[] = [];
  user: string = '';
  ngOnInit(): void {
    let storedUser: string | null = localStorage.getItem("userInfo");

    this.user = storedUser ? JSON.parse(storedUser).username : "";

    this.getThreads();
  }

  getThreads() {
    this.postService.getThreadsByUser(this.user).subscribe({
      next: (v) => this.threads = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  navigateToThread(thread: Thread) {
    console.log("Pretending to navigate to thread: " + thread.title);
    // this.router.navigate(["something goes here!"]);
  }
}
