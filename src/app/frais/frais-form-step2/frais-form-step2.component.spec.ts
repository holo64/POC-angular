import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisFormStep2Component } from './frais-form-step2.component';

describe('FraisFormStep2Component', () => {
  let component: FraisFormStep2Component;
  let fixture: ComponentFixture<FraisFormStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisFormStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
