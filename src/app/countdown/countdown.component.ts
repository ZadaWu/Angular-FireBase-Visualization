import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  @Input() countdownNumber: number = 0;
  
  public counter: number = 0;
  private countdownSubscription?: Subscription;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    // 停止之前的倒计时（如果存在）
    this.stopCountdown();
    
    if (this.countdownNumber && this.countdownNumber > 0) {
      this.counter = this.countdownNumber;
      this.countdownSubscription = interval(1000).subscribe(() => {
        this.counter--;
        this.onDecrease.emit(this.counter);

        if (this.counter === 0) {
          this.onComplete.emit();
          this.stopCountdown();
        }
      });
    }
  }

  private stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.countdownSubscription = undefined;
    }
  }
}
