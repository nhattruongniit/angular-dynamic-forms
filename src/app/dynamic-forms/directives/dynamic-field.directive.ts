import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DfInputComponent } from '../components/input/input.component';
import { DfSelectComponent } from '../components/select/df-select.component';
import { DfRadioComponent } from '../components/radio/df-radio.component';
import { Config } from '../types/config.interface';
import { DFI } from '../types/df.interface';

const components = {
  text: DfInputComponent,
  select: DfSelectComponent,
  radio: DfRadioComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: Config;

  @Input() group: FormGroup;

  component: ComponentRef<DFI>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      const { instance } = this.component;
      instance.config = this.config;
      instance.group = this.group;
    }
  }

  ngOnInit() {
    let { type } = this.config;
    const inputs = ['number', 'email', 'tel', 'password'];
    if (inputs.includes(type)) {
      type = 'text';
    }
    const component = components[type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    const { instance } = this.component;
    instance.config = this.config;
    instance.group = this.group;
  }
}
