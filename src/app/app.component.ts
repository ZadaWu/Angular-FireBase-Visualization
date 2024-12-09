import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <h1>{{ title }}</h1>
      </header>
      <section class="content">
        <app-home></app-home>
        <router-outlet />
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})

/**
 *     // <app-progress-bar [progress]="currentProgress" color="primary"></app-progress-bar>
    // <app-countdown [countdownNumber]="totalCountdown" (onDecrease)="updateProgress($event)" (onComplete)="countDownFinished()"></app-countdown>
    // <button (click)="incrementProgress()">增加进度</button>
    // <button (click)="resetProgress()">重置进度</button>
 */
export class AppComponent {
  title = 'Angular-FireBase-Visualization';
  currentProgress = 0;
  totalCountdown = 20;

  constructor() {
  }

  updateProgress(progress: number) {
    this.currentProgress = (this.totalCountdown - progress) / this.totalCountdown * 100;
  }

  countDownFinished() {
    console.log('count down finished');
  }

  incrementProgress() {
    if (this.currentProgress < 100) {
      this.currentProgress += 10;
    }
  }

  resetProgress() {
    this.currentProgress = 0;
  }
}
