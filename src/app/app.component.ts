import { Component, OnInit } from '@angular/core';
import { Configs } from './dynamic-forms/types/config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  configs: Configs;

  ngOnInit() {
    this.configs = [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        validation: {
          required: true,
          minLength: 5
        }
      }, {
        name: 'year',
        label: 'Year',
        type: 'text',
        value: '2017',
        disabled: true,
        validation: {
          required: true,
        }
      },{
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        validation: {
          required: true,
        },
        options: [
          {
            key: 'male',
            value: 'Male'
          }, {
            key: 'female',
            value: 'Female'
          }
        ]
      }, {
        name: 'country',
        label: 'Country',
        type: 'select',
        validation: {
          required: true,
        },
        options: [
          {
            key: 'vi',
            value: 'Vietnam'
          }, {
            key: 'us',
            value: 'US'
          }
        ]
      }
    ]
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
