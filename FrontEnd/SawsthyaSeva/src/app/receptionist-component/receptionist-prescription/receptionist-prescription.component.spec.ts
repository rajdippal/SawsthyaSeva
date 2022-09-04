import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistPrescriptionComponent } from './receptionist-prescription.component';

describe('ReceptionistPrescriptionComponent', () => {
  let component: ReceptionistPrescriptionComponent;
  let fixture: ComponentFixture<ReceptionistPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
