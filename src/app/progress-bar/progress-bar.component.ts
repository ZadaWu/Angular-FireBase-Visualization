import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      <div class="progress" [style.width.%]="progress"></div>
    </div>
  `,
  styles: [`
    .progress-bar {
      width: 100%;
      height: 20px;
      background-color: #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .progress {
      height: 100%;
      background-color: #4CAF50;
      transition: width 0.3s ease-in-out;
    }
  `]
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
}
