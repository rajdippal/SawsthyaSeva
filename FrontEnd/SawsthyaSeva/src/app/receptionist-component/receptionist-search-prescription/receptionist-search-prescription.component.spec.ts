import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistSearchPrescriptionComponent } from './receptionist-search-prescription.component';

describe('ReceptionistSearchPrescriptionComponent', () => {
  let component: ReceptionistSearchPrescriptionComponent;
  let fixture: ComponentFixture<ReceptionistSearchPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistSearchPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistSearchPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
