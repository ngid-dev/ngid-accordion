import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';
export const disabledAccordionItemAction = (payload: {
  ngidAccordionItem: NgidAccordionItemModel;
  isDisabled: boolean;
}) => {
  const { ngidAccordionItem, isDisabled } = payload;
  ngidAccordionItem.isDisabled = isDisabled;
  if (isDisabled) {
    ngidAccordionItem.isExpanded = false;
  }
};
