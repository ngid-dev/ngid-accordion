import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgidAccordionModule } from './ngid-accordion/ngid-accordion.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgidAccordionModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
