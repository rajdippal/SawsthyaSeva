import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorIpdComponent } from './view-doctor-ipd.component';

describe('ViewDoctorIpdComponent', () => {
  let component: ViewDoctorIpdComponent;
  let fixture: ComponentFixture<ViewDoctorIpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorIpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
