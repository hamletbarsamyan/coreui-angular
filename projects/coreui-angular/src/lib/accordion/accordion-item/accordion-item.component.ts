import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  OnInit, QueryList,
} from '@angular/core';

import { AccordionService } from '../accordion.service';
import { TemplateIdDirective } from '../../shared';

let nextId = 0;

@Component({
  selector: 'c-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  exportAs: 'cAccordionItem',
})
export class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {
  /**
   * Toggle an accordion item programmatically
   * @type boolean
   */
  @Input() open = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'accordion-item': true,
    };
  }
  contentId = `accordion-item-${nextId++}`;
  itemContext = { $implicit: this.open };
  templates: any = {};

  @ContentChildren(TemplateIdDirective, {descendants: true}) contentTemplates!: QueryList<TemplateIdDirective>;

  constructor(
    private accordionService: AccordionService,
  ) { }

  ngOnInit(): void {
    this.accordionService.addItem(this);
  }

  ngOnDestroy(): void {
    this.accordionService.removeItem(this);
  }

  toggleItem(): void {
    this.accordionService.toggelItem(this);
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }
}
