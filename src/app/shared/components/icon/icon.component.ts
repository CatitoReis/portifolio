import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @Input() icon = '';
  @Input() width = '50';
  @Input() height = '50';
  @Input() alt = '';
  @Input() styleClass = '';
}
