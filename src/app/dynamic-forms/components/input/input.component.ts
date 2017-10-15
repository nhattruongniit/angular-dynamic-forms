import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Config } from '../../types/config.interface';
import { DFI } from '../../types/df.interface';

@Component({
  selector: 'tpc-df-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class DfInputComponent implements OnInit, DFI {
  @Input() group: FormGroup;
  @Input() config: Config;

  ngOnInit() {

  }
}
