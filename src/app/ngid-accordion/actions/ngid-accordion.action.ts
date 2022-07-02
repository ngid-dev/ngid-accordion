import { IAction } from '../interface/action';
import { NgidAccordionItemModel } from '../model/ngid-accordion-item.model';

export const ADD_ACCORDION_ITEM = `[ Ngid Accordion ]: Add Accordion Item To Accordion State`;
export const EXPAND_COLLAPSE_ACCORDION_ITEM = `[ Ngid Accordion ]: Expand Collapse Accordion Item`;
export const EXPAND_COLLAPSE_ALL_ACCORDION = `[ Ngid Accordion ]: Expand Collapse All Accordion`;
export const DISABLED_ACCORDION_ITEM = `[ Ngid Accordion ]: Disabled Accordion Item`;
export const HIDE_ACCORDION_ITEM = `[ Ngid Accordion ]: Hide Accordion Item`;

export class AddAccordionItem
  implements IAction<{ ngidAccordionItem: NgidAccordionItemModel }>
{
  public readonly type = ADD_ACCORDION_ITEM;
  constructor(public payload: { ngidAccordionItem: NgidAccordionItemModel }) {}
}

export class ExpandCollapseAccordionItem
  implements IAction<{ ngidAccordionItem: NgidAccordionItemModel }>
{
  public readonly type = EXPAND_COLLAPSE_ACCORDION_ITEM;
  constructor(public payload: { ngidAccordionItem: NgidAccordionItemModel }) {}
}

export class ExpandCollapseAllAccordion implements IAction<void> {
  public readonly type = EXPAND_COLLAPSE_ALL_ACCORDION;
}

export class DisabledAccordionItem
  implements
    IAction<{ ngidAccordionItem: NgidAccordionItemModel; isDisabled: boolean }>
{
  public readonly type = DISABLED_ACCORDION_ITEM;
  constructor(
    public payload: {
      ngidAccordionItem: NgidAccordionItemModel;
      isDisabled: boolean;
    }
  ) {}
}

export class HideAccordionItem
  implements
    IAction<{ ngidAccordionItem: NgidAccordionItemModel; isHidden: boolean }>
{
  public readonly type = HIDE_ACCORDION_ITEM;
  constructor(
    public payload: {
      ngidAccordionItem: NgidAccordionItemModel;
      isHidden: boolean;
    }
  ) {}
}

export type AllAccordionActions =
  | AddAccordionItem
  | ExpandCollapseAccordionItem
  | ExpandCollapseAllAccordion
  | DisabledAccordionItem
  | HideAccordionItem;
