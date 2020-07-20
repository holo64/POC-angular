import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFraisComponent } from './detail-frais.component';

describe('DetailFraisComponent', () => {
  let component: DetailFraisComponent;
  let fixture: ComponentFixture<DetailFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
