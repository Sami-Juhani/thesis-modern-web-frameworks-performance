import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a class="post-card" [routerLink]="['posts', id]">
      <div class="img-container">
        <img class="post-card-img" [src]="image" [alt]="title" />
      </div>
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </a>
  `,
})
export class PostCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() body!: string;
  @Input() image!: string;
}
