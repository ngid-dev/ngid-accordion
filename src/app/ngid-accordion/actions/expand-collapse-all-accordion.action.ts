import { NgidAccordion } from '../domain/ngid-accordion';
import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';
export const expandCollapseAllAccordionAction = (
  state: NgidAccordion
): void => {
  state.model.isExpandedAll = !state.model.isExpandedAll;
  state.items.forEach((ngidAccordionItem: NgidAccordionItemModel) => {
    if (!ngidAccordionItem.isDisabled && !ngidAccordionItem.isHidden) {
      ngidAccordionItem.isExpanded = state.model.isExpandedAll;
    }
  });
};
