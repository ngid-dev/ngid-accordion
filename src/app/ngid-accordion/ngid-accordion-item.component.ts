import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NgidAccordionItemModel } from './model/ngid-accordion-item.model';
import { NgidAccordionService } from './ngid-accordion.service';
import * as ngidAccordionAction from './actions/ngid-accordion.action';
@Component({
  selector: 'ngid-accordion-item',
  templateUrl: './ngid-accordion-item.component.html',
  animations: [
    trigger('expandCollapse', [
      state(
        'void',
        style({
          opacity: 0,
          height: 0,
        })
      ),
      transition('void <=> *', animate(200)),
    ]),
    trigger('rotate', [
      state('default', style({})),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      transition('default <=> rotated', animate(200)),
    ]),
  ],
})
export class NgidAccordionItemComponent implements OnInit, OnChanges {
  @Input() header: string;
  @Input() isExpanded: boolean;
  @Input() isDisabled: boolean;
  @Input() isHidden: boolean;

  @ContentChild('headerLeft') headerLeftTmpl: TemplateRef<any>;
  @ContentChild('header') headerTmpl: TemplateRef<any>;
  @ContentChild('headerRight') headerRightTmpl: TemplateRef<any>;
  @ContentChild('icon') iconTmpl: TemplateRef<any>;

  public model: NgidAccordionItemModel;

  constructor(private ngidAccordion: NgidAccordionService) {
    this.header = '';
    this.isExpanded = false;
  }

  ngOnInit(): void {
    this.setInitializationState();
    this.addAccordionItemToState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isDisabledChanges = changes['isDisabled'];
    const isHidden = changes['isHidden'];
    if (this.model && isDisabledChanges) {
      this.ngidAccordion.dispatch(
        new ngidAccordionAction.DisabledAccordionItem({
          ngidAccordionItem: this.model,
          isDisabled: this.isDisabled,
        })
      );
    }

    if (this.model && isHidden) {
      this.ngidAccordion.dispatch(
        new ngidAccordionAction.HideAccordionItem({
          ngidAccordionItem: this.model,
          isHidden: this.isHidden,
        })
      );
    }
  }

  private setInitializationState(): void {
    this.model = new NgidAccordionItemModel(
      this.header,
      this.isExpanded,
      this.isDisabled,
      this.isHidden
    );
  }

  private addAccordionItemToState(): void {
    this.ngidAccordion.dispatch(
      new ngidAccordionAction.AddAccordionItem({
        ngidAccordionItem: this.model,
      })
    );
  }

  public handleExpandCollapse(): void {
    this.ngidAccordion.dispatch(
      new ngidAccordionAction.ExpandCollapseAccordionItem({
        ngidAccordionItem: this.model,
      })
    );
  }
}
