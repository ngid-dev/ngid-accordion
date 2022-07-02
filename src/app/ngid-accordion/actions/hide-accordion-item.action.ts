import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';
export const hideAccordionItemAction = (payload: {
  ngidAccordionItem: NgidAccordionItemModel;
  isHidden: boolean;
}) => {
  const { ngidAccordionItem, isHidden } = payload;
  ngidAccordionItem.isHidden = isHidden;
  if (isHidden) {
    ngidAccordionItem.isExpanded = false;
  }
};
