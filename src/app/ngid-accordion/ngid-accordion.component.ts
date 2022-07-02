import { Component, Input, OnInit } from '@angular/core';
import { NgidAccordion } from './domain/ngid-accordion';
import { NgidAccordionModel } from './model/ngid-accordion.model';
import { NgidAccordionService } from './ngid-accordion.service';
import * as ngidAccordionAction from './actions/ngid-accordion.action';
@Component({
  selector: 'ngid-accordion',
  templateUrl: './ngid-accordion.component.html',
  providers: [NgidAccordionService],
})
export class NgidAccordionComponent implements OnInit {
  @Input() isShowButtonExpandAll: boolean;
  @Input() isExpandedAll: boolean;
  @Input() isShowMultiple: boolean;
  public state: NgidAccordion;
  constructor(private ngidAccordion: NgidAccordionService) {
    this.isShowButtonExpandAll = false;
  }

  ngOnInit(): void {
    this.setInitializationState();
  }

  private setInitializationState(): void {
    const model = new NgidAccordionModel(
      !!this.isExpandedAll,
      !!this.isShowMultiple
    );
    this.state = this.ngidAccordion.setState(model);
  }

  public handleExpandCollapseAll(): void {
    this.ngidAccordion.dispatch(
      new ngidAccordionAction.ExpandCollapseAllAccordion()
    );
  }
}
