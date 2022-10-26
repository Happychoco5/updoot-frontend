import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Reply } from 'src/app/models/reply/reply';
import { UpdootedReply } from 'src/app/models/updooted/updooted-reply';
import { UpdootService } from 'src/app/services/updoot/updoot.service';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.css']
})
export class ReplyCardComponent implements OnInit {
  @Input() reply!:Reply;
  updooted: boolean = true;
  constructor(private updootService:UpdootService) { }

  ngOnInit(): void {
    this.updootService
    .getUpdootedReply(this.reply.accountId, this.reply.replyId)
    .subscribe({
      next:(updooted) => {
      this.updooted = updooted;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updootReply(reply: Reply){
    // change this later
    this.updooted = true;
    const updootedReply:UpdootedReply = new UpdootedReply(0, 1, reply.replyId);
    this.updootService.postUpdootReply(updootedReply).subscribe(
      {next: (res) => {
        this.updootService.updootReply(updootedReply.replyId).subscribe({
          next: (numUpdooted) => {
            reply.updoot = numUpdooted;
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
