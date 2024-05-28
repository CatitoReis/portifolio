import { Component, Input } from '@angular/core';
import { INavLink } from 'src/app/interfaces/nav-link.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() buttons: INavLink[] = [];

  public toggle = false;

  scroolTo(href: string): void {
    const section = document.getElementById(href.slice(1));
    section && window.scrollTo(0, section.offsetTop - 75);
    this.toggle = false;
  }
}
