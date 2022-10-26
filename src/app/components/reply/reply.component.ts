import { Component, OnInit, Input} from '@angular/core';
import { Reply } from 'src/app/models/reply/reply';
import { UpdootedReply } from 'src/app/models/updooted/updooted-reply';
import { ReplyService } from 'src/app/services/reply/reply.service';
import { UpdootService } from 'src/app/services/updoot/updoot.service';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() postId!: number;
  replies: Reply[] = [];
  replyContent: string = "";
  updooted: boolean = false;

  constructor(private replyService: ReplyService, private updootService: UpdootService) {}

  ngOnInit(): void {
    // this.createReplyForPost();
    // this.getRepliesByPost();
    console.log(this.postId);
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

  checkForUpdoot(replyId: number){
    this.updootService.getUpdootedReply(1, replyId).subscribe({
      next: (res) => {
        return res;
      }
    })
  }

}
