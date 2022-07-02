import { NgidAccordion } from '../domain/ngid-accordion';
import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';

export const addAccordionItemAction = (
  state: NgidAccordion,
  payload: { ngidAccordionItem: NgidAccordionItemModel }
): void => {
  state.addItem(payload.ngidAccordionItem);
  if (state.model.isExpandedAll) {
    payload.ngidAccordionItem.isExpanded = state.model.isExpandedAll;
  }
};
