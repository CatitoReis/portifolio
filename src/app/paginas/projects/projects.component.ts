import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit, OnChanges {
  @Input() isSmallScreen = false;

  public imgs: { src: string }[] = [
    { src: 'assets/imgs/coming-soon.jpg' },
    { src: 'assets/imgs/coming-soon-2.jpg' },
    { src: 'assets/imgs/coming-soon-3.jpg' },
    { src: 'assets/imgs/coming-soon-4.jpg' },
    { src: 'assets/imgs/coming-soon-5.jpg' },
  ];

  selectedIndex = 1;

  ngAfterViewInit(): void {
    if (this.detectTouchDevice()) {
      this.isSmallScreen = true;
      return;
    }

    if (this.isSmallScreen === false) {
      setTimeout(() => {
        const cards = document.querySelectorAll('.vanillaTilt') as any;
        VanillaTilt.init(cards);
      }, 1);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.detectTouchDevice()) {
      this.isSmallScreen = true;
      return;
    }

    if (changes['isSmallScreen'].firstChange) return;

    if (this.isSmallScreen) {
      const cards = document.querySelectorAll('.vanillaTilt') as any;
      cards.forEach((card: any) => {
        card.vanillaTilt.destroy();
      });
    } else {
      const cards = document.querySelectorAll('.vanillaTilt') as any;
      VanillaTilt.init(cards);
    }
  }

  detectTouchDevice(): boolean {
    if ('ontouchstart' in window) return true;

    return false;
  }

  showPrev(index: number): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex = index - 1;
    }
  }

  showNext(index: number): void {
    if (this.selectedIndex < this.imgs.length - 1) {
      this.selectedIndex = index + 1;
    }
  }
}
