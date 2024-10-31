import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  template: `
    <div>
      <h3 class="mb-2">{{ title }}</h3>
      <h4 className="mb-2">Updated at: {{ currentDate }}</h4>
      <ul class="stats-list">
        <li>
          Posts: <span>{{ posts }}</span>
        </li>
        <li>
          Comments: <span>{{ comments }}</span>
        </li>
        <li>
          Users: <span>{{ users }}</span>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      h4 {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class StatisticsComponent {
  @Input() title!: string;
  @Input() posts!: number;
  @Input() comments!: number;
  @Input() users!: number;

  currentDate: string = new Date().toISOString();

  ngOnChanges(changes: SimpleChanges): void {
    this.currentDate = new Date().toISOString();
  }
}
