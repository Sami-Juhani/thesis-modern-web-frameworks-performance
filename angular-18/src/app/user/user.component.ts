import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUser } from '../../api/users';
import { getUserPosts } from '../../api/users';
import { PostCardComponent } from '../post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  template: `
    <div>
      <h1 class="page-title">{{ user?.name }}</h1>
      <div class="page-subtitle">{{ user?.email }}</div>
      <div><b>Company:</b> {{ user?.company.name }}</div>
      <div><b>Website:</b> {{ user?.website }}</div>
      <div>
        <b>Address:</b> {{ user?.address.street }} {{ user?.address.suite }}
        {{ user?.address.city }} {{ user?.address.zipcode }}
      </div>

      <h3 class="mt-4 mb-2">Posts</h3>
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
export class UserComponent implements OnInit {
  user: any = null;
  posts: any[] = [];
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId')!;
    });
    this.fetchUserData(this.userId);
  }

  async fetchUserData(userId: string) {
    try {
      const userRes = await getUser(userId);
      const postsRes = await getUserPosts(userId);

      this.user = await userRes.json();
      this.posts = await postsRes.json();
    } catch (error) {
      console.error('Error fetching user or posts:', error);
    }
  }
}
