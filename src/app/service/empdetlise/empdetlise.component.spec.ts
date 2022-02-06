import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetliseComponent } from './empdetlise.component';

describe('EmpdetliseComponent', () => {
  let component: EmpdetliseComponent;
  let fixture: ComponentFixture<EmpdetliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdetliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdetliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
