import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutIpdComponent } from './check-out-ipd.component';

describe('CheckOutIpdComponent', () => {
  let component: CheckOutIpdComponent;
  let fixture: ComponentFixture<CheckOutIpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutIpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
