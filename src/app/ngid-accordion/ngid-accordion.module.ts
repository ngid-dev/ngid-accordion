import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgidAccordionItemComponent } from './ngid-accordion-item.component';
import { NgidAccordionComponent } from './ngid-accordion.component';
@NgModule({
  imports: [CommonModule],
  declarations: [NgidAccordionComponent, NgidAccordionItemComponent],
  exports: [NgidAccordionComponent, NgidAccordionItemComponent],
})
export class NgidAccordionModule {}
