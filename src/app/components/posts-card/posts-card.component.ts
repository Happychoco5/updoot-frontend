import { Component, Input, OnInit } from '@angular/core';
import { Thread } from 'src/app/models/thread/thread';
import { UpdootedThread } from 'src/app/models/updooted/updooted-thread';
import { UpdootService } from 'src/app/services/updoot/updoot.service';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent implements OnInit {

  @Input() thread!:Thread;
  updooted: boolean = true;
  constructor(private updootService:UpdootService) { }

  ngOnInit(): void {
    this.updootService
    .getUpdootedThread(this.thread.accountId, this.thread.threadId)
    .subscribe({
      next:(updooted) => {
      this.updooted = updooted;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updootPost(thread: Thread){
    // change this later
    this.updooted = true;
    const updootedThread:UpdootedThread = new UpdootedThread(0, 1, thread.threadId);
    this.updootService.postUpdootThread(updootedThread).subscribe(
      {next: (res) => {
        this.updootService.updootThread(updootedThread.threadId).subscribe({
          next: (numUpdooted) => {
            thread.updoot = numUpdooted;
          },
          error: (err2) => {
            console.log(err2);
            this.updooted = false;
          }
        });
      },
      error: (err) => {
        console.log(err);
        this.updooted = false;
      }
    });
  }

}
