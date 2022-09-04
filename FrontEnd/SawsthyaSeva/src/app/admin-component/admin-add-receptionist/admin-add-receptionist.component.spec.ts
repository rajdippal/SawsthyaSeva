import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddReceptionistComponent } from './admin-add-receptionist.component';

describe('AdminAddReceptionistComponent', () => {
  let component: AdminAddReceptionistComponent;
  let fixture: ComponentFixture<AdminAddReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddReceptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
