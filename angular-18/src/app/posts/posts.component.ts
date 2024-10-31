import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { getPosts } from '../../api/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  template: `
    <div>
      <h1 class="page-title">Posts</h1>
      <div class="post-container">
        <app-post-card
          *ngFor="let post of posts; let i = index"
          [id]="post.id"
          [title]="post.title"
          [body]="post.body"
          [image]="'https://picsum.photos/1000/1000?random=' + i"
        ></app-post-card>
      </div>
    </div>
  `,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  ngOnInit() {
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const postRes = await getPosts();
      this.posts = await postRes.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
}
