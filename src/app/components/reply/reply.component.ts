import { Component, OnInit } from '@angular/core';
import { Reply } from 'src/app/models/reply/reply';
import { ReplyService } from 'src/app/services/reply/reply.service';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  constructor(private replyService: ReplyService) { }

  ngOnInit(): void {
    this.createReplyForPost();
    this.getRepliesByPost();
  }
  getRepliesByPost(){
    this.replyService.getRepliesForPost(1).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err)
      }
    );
  }

  createReplyForPost(){
    const reply= new Reply(0, 1, 1, "...", 0, 0);
    this.replyService.registerPostReply(reply).subscribe(
      (res) => {
        console.log(res);
      }, 
      (err) => {
        console.log(err);
      }
    );
  }
}
