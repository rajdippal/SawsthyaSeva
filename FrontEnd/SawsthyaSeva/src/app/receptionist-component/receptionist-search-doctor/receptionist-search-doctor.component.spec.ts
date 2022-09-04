import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistSearchDoctorComponent } from './receptionist-search-doctor.component';

describe('ReceptionistSearchDoctorComponent', () => {
  let component: ReceptionistSearchDoctorComponent;
  let fixture: ComponentFixture<ReceptionistSearchDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistSearchDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistSearchDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
