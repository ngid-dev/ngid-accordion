import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';
import { NgidAccordionModel } from '../model/ngid-accordion.model';
export class NgidAccordion {
  public items: Array<NgidAccordionItemModel>;
  constructor(public model: NgidAccordionModel) {
    this.items = new Array();
  }

  public addItem(ngidAccordionItem: NgidAccordionItemModel): void {
    this.items.push(ngidAccordionItem);
  }

  public static create(model: NgidAccordionModel): NgidAccordion {
    const ngidAccordion = new NgidAccordion(model);
    return ngidAccordion;
  }
}
