import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskComponentComponent } from './risk-component.component';

describe('RiskComponentComponent', () => {
  let component: RiskComponentComponent;
  let fixture: ComponentFixture<RiskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
