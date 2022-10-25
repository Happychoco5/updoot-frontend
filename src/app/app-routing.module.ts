import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path:"home", component:PostsComponent},
  {path:"create-posts", component:CreatePostsComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
