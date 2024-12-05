import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent],
  template: `
    <h1>{{ title }}</h1>
    
    <app-progress-bar [progress]="currentProgress" color="primary"></app-progress-bar>
    
    <button (click)="incrementProgress()">增加进度</button>
    <button (click)="resetProgress()">重置进度</button>
    
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-FireBase-Visualization';
  currentProgress = 0;

  incrementProgress() {
    if (this.currentProgress < 100) {
      this.currentProgress += 10;
    }
  }

  resetProgress() {
    this.currentProgress = 0;
  }
}
