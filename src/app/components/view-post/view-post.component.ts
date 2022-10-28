import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread } from 'src/app/models/thread/thread';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postService:PostService) { }
  threadId:number = 0;
  thread:Thread = new Thread(0, 0, "", "", 0, 0);
  ngOnInit(): void {
    this.threadId = Number(this.route.snapshot.paramMap.get("id"));
  }

}
