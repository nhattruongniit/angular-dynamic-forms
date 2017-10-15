import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Config } from '../../types/config.interface';
import { DFI } from '../../types/df.interface';

@Component({
  selector: 'tpc-df-select',
  templateUrl: './df-select.component.html',
  styleUrls: ['./df-select.component.scss']
})
export class DfSelectComponent implements OnInit, DFI {
  @Input() group: FormGroup;
  @Input() config: Config;

  constructor() { }

  ngOnInit() {
  }

}
