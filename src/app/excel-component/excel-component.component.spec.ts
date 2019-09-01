import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelComponentComponent } from './excel-component.component';

describe('ExcelComponentComponent', () => {
  let component: ExcelComponentComponent;
  let fixture: ComponentFixture<ExcelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
