import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialAppModule } from '../material-app/material-app.module';
import { DfInputComponent } from './components/input/input.component';
import { DfRadioComponent } from './components/radio/df-radio.component';
import { DfSelectComponent } from './components/select/df-select.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialAppModule
  ],
  declarations: [
    DynamicFormsComponent,
    DfInputComponent,
    DfRadioComponent,
    DfSelectComponent,
    DynamicFieldDirective
  ],
  exports: [DynamicFormsComponent],
  entryComponents: [
    DfInputComponent,
    DfRadioComponent,
    DfSelectComponent
  ]
})
export class DynamicFormsModule { }
