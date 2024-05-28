import { Component, Input } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { INavLink } from 'src/app/interfaces/nav-link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isSmallScreen = false;
  @Input() buttons: INavLink[] = [];

  stateOptions: any[] = [
    { label: 'pt-BR', value: 'pt-BR' },
    { label: 'en', value: 'en' },
  ];

  value: string = 'pt-BR';

  constructor(private transSrv: TranslocoService) {}

  setLang(lang: string): void {
    this.transSrv.setActiveLang(lang);
  }

  scroolTo(href: string): void {
    const section = document.getElementById(href.slice(1));
    section && window.scrollTo(0, section.offsetTop - 75);
  }
}
