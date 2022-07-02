import { NgidAccordion } from '../domain/ngid-accordion';
import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';
export const expandCollapseAccordionItemAction = (
  state: NgidAccordion,
  payload: { ngidAccordionItem: NgidAccordionItemModel }
): void => {
  if (!payload.ngidAccordionItem.isDisabled) {
    const isExpanded = !payload.ngidAccordionItem.isExpanded;
    if (!state.model.isShowMultiple) {
      state.items.forEach((ngidAccordionItem: NgidAccordionItemModel) => {
        ngidAccordionItem.isExpanded = false;
      });
    }
    payload.ngidAccordionItem.isExpanded = isExpanded;
  }
};
