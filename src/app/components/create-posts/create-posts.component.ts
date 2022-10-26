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
    this.registerForm = this.formBuilder.group({
      account_id: [''],
      title: [''],
      content: [''],
    });
  }

  registerForm!: FormGroup;
  submitted = false;

  
  async onSubmit(){
    const thread: Thread = {threadId: 0,
      accountId:this.registerForm.controls['account_id'].value,
      title:this.registerForm.controls['title'].value,
      content:this.registerForm.controls['content'].value,
      epoch:Date.now()/1000,
      updoot: 0};
      this.createPost(thread);
  }
  

  createPost(thread: Thread)
  {
    console.log(thread);
    this.postService.makeSingleThread(thread).subscribe(
      (thread)=>{
        console.log("Success");
      },
      (error)=>{
        console.log("Something went wrong");
      }
    );
  }

}
