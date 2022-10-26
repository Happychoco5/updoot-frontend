import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  threadId:number = 0;
  ngOnInit(): void {
    this.threadId = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.threadId);
  }

}
