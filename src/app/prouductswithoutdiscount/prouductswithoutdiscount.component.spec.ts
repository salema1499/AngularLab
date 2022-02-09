import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductswithoutdiscountComponent } from './prouductswithoutdiscount.component';

describe('ProuductswithoutdiscountComponent', () => {
  let component: ProuductswithoutdiscountComponent;
  let fixture: ComponentFixture<ProuductswithoutdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductswithoutdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductswithoutdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
