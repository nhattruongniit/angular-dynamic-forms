import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Configs, IValidator } from './types/config.interface';
import * as FormValidation from './types/form-validation-type.interface';

@Component({
  selector: 'tpc-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  @Input() configs: Configs = [];

  @Output() dfSubmit = new EventEmitter<any>();

  group: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.group = this.createForm();
  }

  createForm(): FormGroup {
    const group = this.fb.group({});
    this.configs.forEach(ctrl => {
      const { disabled, value } = ctrl;
      group.addControl(
        ctrl.name, this.fb.control(
          { disabled, value }, this.coerceToValidator(ctrl.validation)
        )
      )
    });
    return group;

  }

  coerceToValidator(validators: IValidator): ValidatorFn[] {
    const formValidators = [];
    if (validators) {
      const keys = Object.keys(validators);
      for (const validation of keys) {
        if (validation === FormValidation.required) {
          validators[validation] && formValidators.push(Validators.required); // only push to return result when it's truthy
        } else if (validation === FormValidation.minLength) {
          formValidators.push(Validators.minLength(validators[validation] as number));
        } else if (validation === FormValidation.maxLength) {
          formValidators.push(Validators.maxLength(validators[validation] as number));
        } else if (validation === FormValidation.email) {
          validators[validation] && formValidators.push(Validators.email);
        }
      }
    }
    return formValidators;
  }

  onSubmit() {
    this.dfSubmit.emit(this.group);
  }

}
