import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistTakeAppointmentComponent } from './receptionist-take-appointment.component';

describe('ReceptionistTakeAppointmentComponent', () => {
  let component: ReceptionistTakeAppointmentComponent;
  let fixture: ComponentFixture<ReceptionistTakeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistTakeAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistTakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
