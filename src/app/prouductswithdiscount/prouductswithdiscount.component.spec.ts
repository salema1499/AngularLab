import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductswithdiscountComponent } from './prouductswithdiscount.component';

describe('ProuductswithdiscountComponent', () => {
  let component: ProuductswithdiscountComponent;
  let fixture: ComponentFixture<ProuductswithdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductswithdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductswithdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
