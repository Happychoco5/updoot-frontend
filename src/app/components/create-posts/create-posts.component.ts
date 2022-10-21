import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Thread } from 'src/app/models/thread/thread';
import { PostService } from 'src/app/services/post/post.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  constructor(private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  registerForm!: FormGroup;
  submitted = false;

  /*
        public thread_id: number,
        public account_id: number,
        public title: string,
        public content: string,
        public epoch: number,
        public updoot: number
  */
  async onSubmit(){
    const thread: Thread = {thread_id: 0,
      account_id:this.registerForm.controls['account_id'].value,
      title:this.registerForm.controls['title'].value,
      content:this.registerForm.controls['comment'].value,
      epoch:0,
      updoot: 0};
      this.createPost(thread);
  }
  

  async createPost(thread: Thread)
  {
    this.postService.makeSingleThread(thread);
  }

}
