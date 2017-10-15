import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Config } from '../../types/config.interface';
import { DFI } from '../../types/df.interface';

@Component({
  selector: 'tpc-df-radio',
  templateUrl: './df-radio.component.html',
  styleUrls: ['./df-radio.component.scss']
})
export class DfRadioComponent implements OnInit, DFI {
  @Input() group: FormGroup;
  @Input() config: Config;

  constructor() { }

  ngOnInit() {
  }

}
