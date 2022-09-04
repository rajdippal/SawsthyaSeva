import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMakePrescriptionComponent } from './doctor-make-prescription.component';

describe('DoctorMakePrescriptionComponent', () => {
  let component: DoctorMakePrescriptionComponent;
  let fixture: ComponentFixture<DoctorMakePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMakePrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMakePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
