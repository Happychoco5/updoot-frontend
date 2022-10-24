import { Component, OnInit, Input} from '@angular/core';
import { Reply } from 'src/app/models/reply/reply';
import { ReplyService } from 'src/app/services/reply/reply.service';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() postId!: number;
  replies: Reply[] = [];
  replyContent: string = "";

  constructor(private replyService: ReplyService) {}

  ngOnInit(): void {
    // this.createReplyForPost();
    // this.getRepliesByPost();
    this.getRepliesByPost(this.postId);
  }
  getRepliesByPost(postId:number){
    this.replyService.getRepliesForPost(postId).subscribe(
      {
        next: (replies) => {
        this.replies = replies;
        },
        error: (err) => {
        console.log(err)
        }
    });
  }

  createReplyForPost(){
    const reply= new Reply(0, this.postId, 1, this.replyContent, this.getTimestampInSeconds(), 0);
    this.replyService.registerPostReply(reply).subscribe(
      {next: (reply) => {
        this.getRepliesByPost(this.postId);
        this.replyContent = "";
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }

  getTimestampInSeconds () {
    return Math.floor(new Date().getTime()/1000.0);
  }

}
