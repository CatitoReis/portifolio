import { NgModule } from '@angular/core';
import { BlobAvatarComponent } from './blob-avatar/blob-avatar.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [BlobAvatarComponent, IconComponent],
  imports: [],
  exports: [BlobAvatarComponent, IconComponent],
})
export class SharedModule {}
