import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostCardComponent } from '../post-card/post-card.component';
import { StatisticsComponent } from '../statistics/statistics.component';

import { getPosts } from '../../api/posts';
import { getComments } from '../../api/comments';
import { getUsers } from '../../api/users';
import { filterData } from '../../lib/utils';
import { CommentCardComponent } from '../comment/comment.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    PostCardComponent,
    StatisticsComponent,
    CommentCardComponent,
    UserCardComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  template: `
    <div>
      <img class='hero-image' src='https://picsum.photos/id/1/1000/1000' alt='hero-image' />
      <div class="post-header">
        <form [formGroup]="form" class="form" (ngSubmit)="handleSubmit()">
          <input
            type="search"
            class="post-input"
            placeholder="search for post"
            formControlName="query"
          />
          <button class="btn" type="submit">Filter</button>
        </form>

        <div class="flex">
          <app-statistics
            title="Stats"
            [posts]="posts.length"
            [comments]="comments.length"
            [users]="users.length"
          ></app-statistics>
          <app-statistics
            title="Filtered Stats"
            [posts]="filteredPosts.length"
            [comments]="filteredComments.length"
            [users]="filteredUsers.length"
          ></app-statistics>
        </div>
      </div>

      <h2 class="page-title">Posts</h2>
      <div class="post-container">
        <app-post-card
          *ngFor="let post of filteredPosts; let i = index"
          [id]="post.id"
          [title]="post.title"
          [body]="post.body"
          [image]="'https://picsum.photos/1000/1000?random=' + i"
        ></app-post-card>
      </div>

      <h2 class="page-title">Users</h2>
      <div class="card-grid">
        <app-user-card
          *ngFor="let user of filteredUsers"
          [user]="user"
        ></app-user-card>
      </div>

      <h2 class="page-title">Comments</h2>
      <div class="card-stack">
        <app-comment
          *ngFor="let comment of filteredComments"
          [comment]="comment"
        ></app-comment>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];
  users: any[] = [];
  filteredPosts: any[] = [];
  filteredComments: any[] = [];
  filteredUsers: any[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ query: [''] });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    Promise.all([getPosts(), getComments(), getUsers()])
      .then(async ([postRes, commentRes, userRes]) => {
        this.posts = await postRes.json();
        this.comments = await commentRes.json();
        this.users = await userRes.json();
        this.filteredPosts = this.posts;
        this.filteredComments = this.comments;
        this.filteredUsers = this.users;
      })
      .catch((err) => console.error(err));
  }

  handleSubmit() {
    const { query } = this.form.value;
    const [filteredPosts, filteredComments, filteredUsers] = filterData(
      query,
      this.posts,
      this.comments,
      this.users
    );
    this.filteredPosts = filteredPosts;
    this.filteredComments = filteredComments;
    this.filteredUsers = filteredUsers;
  }
}
