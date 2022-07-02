import { NgidAccordion } from './domain/ngid-accordion';
import { NgidAccordionModel } from './model/ngid-accordion.model';
import * as ngidAccordionAction from './actions/ngid-accordion.action';
import { dispatchAccordionAction } from './actions/dispatch-accordion.action';
export class NgidAccordionService {
  public state: NgidAccordion;
  public setState(model: NgidAccordionModel): NgidAccordion {
    this.state = NgidAccordion.create(model);
    return this.state;
  }

  public dispatch(action: ngidAccordionAction.AllAccordionActions): void {
    dispatchAccordionAction(this.state, action);
  }
}
