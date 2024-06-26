import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './transloco-root.module';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarComponent } from './paginas/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './paginas/header/header/header.component';
import { HomeComponent } from './paginas/home/home/home.component';
import { SharedModule } from './shared/components/shared.module';
import { AboutMeComponent } from './paginas/about-me/about-me.component';
import { ProjectsComponent } from './/paginas/projects/projects.component';
import { ContactComponent } from './paginas/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TranslocoRootModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    RippleModule,
    DropdownModule,
    SharedModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
