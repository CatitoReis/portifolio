import { Component, Input } from '@angular/core';

@Component({
  selector: 'blob-avatar',
  templateUrl: './blob-avatar.component.html',
  styleUrls: ['./blob-avatar.component.scss'],
})
export class BlobAvatarComponent {
  @Input() img: string[] = [];
  @Input() width = '';
  @Input() height = '';
  @Input() velocity = '';
}
