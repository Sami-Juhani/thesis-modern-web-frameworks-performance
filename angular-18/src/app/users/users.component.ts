import { Component, OnInit } from '@angular/core';
import { getUsers } from '../../api/users';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h1 class="page-title">Users</h1>
      <div class="card-grid">
        <div *ngFor="let user of users" class="card" [attr.key]="user.id">
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
      </div>
    </div>
  `,
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const usersRes = await getUsers();
      this.users = await usersRes.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
