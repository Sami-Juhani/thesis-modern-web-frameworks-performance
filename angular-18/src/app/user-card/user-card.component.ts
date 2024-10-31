import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="card">
      <div class="card-header">{{ user.name }}</div>
      <div class="card-body">
        <div>{{ user.company.name }}</div>
        <div>{{ user.website }}</div>
        <div>{{ user.email }}</div>
      </div>
      <div class="card-footer">
        <a class="btn" [routerLink]="['/users', user.id]">View</a>
      </div>
    </div>
  `,
})
export class UserCardComponent {
  @Input() user: any;
}
