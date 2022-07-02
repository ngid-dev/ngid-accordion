import { NgidAccordion } from '../domain/ngid-accordion';
import { addAccordionItemAction } from './add-accordion-item.action';
import { disabledAccordionItemAction } from './disabled-accordion-item.action';
import { expandCollapseAccordionItemAction } from './expand-collapse-accordion-item.action';
import { expandCollapseAllAccordionAction } from './expand-collapse-all-accordion.action';
import { hideAccordionItemAction } from './hide-accordion-item.action';
import * as ngidAccordionAction from './ngid-accordion.action';
export const dispatchAccordionAction = (
  state: NgidAccordion,
  action: ngidAccordionAction.AllAccordionActions
) => {
  switch (action.type) {
    case ngidAccordionAction.ADD_ACCORDION_ITEM:
      addAccordionItemAction(state, action.payload);
      break;
    case ngidAccordionAction.EXPAND_COLLAPSE_ACCORDION_ITEM:
      expandCollapseAccordionItemAction(state, action.payload);
      break;
    case ngidAccordionAction.EXPAND_COLLAPSE_ALL_ACCORDION:
      expandCollapseAllAccordionAction(state);
      break;
    case ngidAccordionAction.DISABLED_ACCORDION_ITEM:
      disabledAccordionItemAction(action.payload);
      break;
    case ngidAccordionAction.HIDE_ACCORDION_ITEM:
      hideAccordionItemAction(action.payload);
      break;
    default:
      break;
  }
};
