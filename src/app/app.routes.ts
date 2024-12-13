import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
      { path: '', redirectTo: '/home/users', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
