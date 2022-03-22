import { ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ListenersService } from '../services/listeners.service';
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let document: Document;
  let renderer: Renderer2;
  let hostElement: ElementRef;
  let componentFactoryResolver: ComponentFactoryResolver;
  let viewContainerRef: ViewContainerRef;

  it('should create an instance', () => {
    const listenersService = new ListenersService(renderer);
    const directive = new TooltipDirective(document, renderer, hostElement, componentFactoryResolver, viewContainerRef, listenersService);
    expect(directive).toBeTruthy();
  });
});