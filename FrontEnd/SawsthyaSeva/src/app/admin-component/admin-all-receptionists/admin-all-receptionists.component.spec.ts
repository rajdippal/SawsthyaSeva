import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllReceptionistsComponent } from './admin-all-receptionists.component';

describe('AdminAllReceptionistsComponent', () => {
  let component: AdminAllReceptionistsComponent;
  let fixture: ComponentFixture<AdminAllReceptionistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllReceptionistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllReceptionistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
