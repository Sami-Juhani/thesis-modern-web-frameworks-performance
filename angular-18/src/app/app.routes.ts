import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:postId',
    component: PostComponent,
  },
  { path: 'users', component: UsersComponent },
  {
    path: 'users/:userId',
    component: UserComponent,
  },
];
