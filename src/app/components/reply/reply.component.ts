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

  updootReply(reply: Reply){
    const updootedReply = new UpdootedReply(0, 1, reply.replyId);
    this.updootService.postUpdootReply(updootedReply).subscribe(
      {next: (res) => {
        this.updootService.updootReply(reply.replyId).subscribe({
          next: (res2) => {
            reply.updoot = res2;
          },
          error: (err2) => {
            console.log(err2);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  checkForUpdoot(replyId: number){
    this.updootService.getUpdootedReply(1, replyId).subscribe({
      next: (res) => {
        return res;
      }
    })
  }

}
