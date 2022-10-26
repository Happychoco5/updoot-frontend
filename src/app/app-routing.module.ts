import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full" },
  {path:"home", component:PostsComponent},
  {path:"create-posts", component:CreatePostsComponent},
  {path: "login", component: LoginComponent},
  {path: "user-posts", component: UserPostsComponent},
  {path: "post/:id", component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
