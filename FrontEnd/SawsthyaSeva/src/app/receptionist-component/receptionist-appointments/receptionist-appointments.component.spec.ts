import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistAppointmentsComponent } from './receptionist-appointments.component';

describe('ReceptionistAppointmentsComponent', () => {
  let component: ReceptionistAppointmentsComponent;
  let fixture: ComponentFixture<ReceptionistAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
