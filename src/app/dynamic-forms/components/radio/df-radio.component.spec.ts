import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfRadioComponent } from './df-radio.component';

describe('DfRadioComponent', () => {
  let component: DfRadioComponent;
  let fixture: ComponentFixture<DfRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
