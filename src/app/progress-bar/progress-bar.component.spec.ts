import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set progress value', () => {
    component.progress = 50;
    fixture.detectChanges();
    const progressBar = fixture.nativeElement.querySelector('.progress-bar');
    expect(progressBar.style.width).toBe('50%');
  });

  it('should set color class', () => {
    component.color = 'accent';
    fixture.detectChanges();
    const progressBar = fixture.nativeElement.querySelector('.progress-bar');
    expect(progressBar.classList.contains('accent')).toBeTruthy();
  });
});
