import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { getPost } from '../../api/posts';
import { getPostComments } from '../../api/comments';
import { getUser } from '../../api/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div>
      <h1 class="page-title">{{ post.title }}</h1>
      <span class="page-subtitle">
        By: <a [routerLink]="['/users', user.id]">{{ user.name }}</a>
      </span>
      <div>{{ post.body }}</div>
      <h3 class="mt-4 mb-2">Comments</h3>
      <div *ngIf="comments.length; else noComments" class="card-stack">
        <div *ngFor="let comment of comments" class="card">
          <div class="card-body">
            <div class="text-sm mb-1">{{ comment.email }}</div>
            {{ comment.body }}
          </div>
        </div>
      </div>
      <ng-template #noComments>No comments available</ng-template>
    </div>
  `,
})
export class PostComponent implements OnInit {
  post: any = {};
  comments: any[] = [];
  user: any = {};
  postId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('postId')!;
    });
    this.fetchPostData(this.postId);
  }

  async fetchPostData(postId: string | null) {
    try {
      const commentsPromise = getPostComments(postId);
      const postPromise = getPost(postId);

      const postRes = await postPromise;
      const postData = await postRes.json();

      const userPromise = getUser(postData.userId);
      const [commentsRes, userRes] = await Promise.all([
        commentsPromise,
        userPromise,
      ]);

      const commentData = await commentsRes.json();
      const userData = await userRes.json();

      this.post = postData;
      this.comments = commentData;
      this.user = userData;
    } catch (error) {
      console.error('Error fetching data:');
    }
  }
}
