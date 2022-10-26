import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { UpdootService } from 'src/app/services/updoot/updoot.service';



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

  // updootReply(reply: Reply){
  //   // change this later
  //   this.updooted = true;
  //   const updootedReply:UpdootedReply = new UpdootedReply(0, 1, reply.replyId);
  //   this.updootService.postUpdootReply(updootedReply).subscribe(
  //     {next: (res) => {
  //       this.updootService.updootReply(updootedReply.replyId).subscribe({
  //         next: (numUpdooted) => {
  //           reply.updoot = numUpdooted;
  //         },
  //         error: (err2) => {
  //           console.log(err2);
  //           this.updooted = false;
  //         }
  //       });
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.updooted = false;
  //     }
  //   });
  // }


}
