import { AfterContentInit, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  public isSmallScreen = false;

  public navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private primengConfig: PrimeNGConfig
  ) {
    this.primengConfig.ripple = true;
  }

  ngAfterContentInit(): void {
    this.breackPoint();
  }

  breackPoint(): void {
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe(({ matches }) => {
        this.isSmallScreen = matches;
      });
  }
}
