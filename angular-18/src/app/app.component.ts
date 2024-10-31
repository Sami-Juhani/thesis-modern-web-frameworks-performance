import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `<nav class="top-nav">
      <div class="nav-text-large">
        React and modern web frameworks: A comparison of performance - Angular 18
      </div>
      <ul class="nav-list">
        <li>
          <a
            routerLink="/"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Home</a
          >
        </li>
        <li>
          <a
            routerLink="/posts"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Posts</a
          >
        </li>
        <li>
          <a
            routerLink="users"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            >Users</a
          >
        </li>
      </ul>
    </nav>
    <main class="container"><router-outlet></router-outlet></main>`,
})
export class AppComponent {
  title = 'angular-18';
}
