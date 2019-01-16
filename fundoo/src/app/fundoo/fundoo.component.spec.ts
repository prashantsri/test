import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundooComponent } from './fundoo.component';

describe('FundooComponent', () => {
  let component: FundooComponent;
  let fixture: ComponentFixture<FundooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
