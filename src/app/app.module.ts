import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { ReplyComponent } from './components/reply/reply.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReplyCardComponent } from './components/reply-card/reply-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreatePostsComponent,
    ReplyComponent,
    NavbarComponent,
    LoginComponent,
    HomePageComponent,
    ReplyCardComponent,
    UserPostsComponent,
    TruncatePipe,
    ViewPostComponent,
    PostsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
