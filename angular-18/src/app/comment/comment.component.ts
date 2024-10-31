import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-body">
        <div class="text-sm mb-1">{{ comment.email }}</div>
        {{ comment.body }}
      </div>
    </div>
  `,
})
export class CommentCardComponent {
  @Input() comment: any;
}
