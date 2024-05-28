import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  exports: [SidebarModule, ButtonModule, RippleModule, DropdownModule],
})
export class MaterialModule {}
