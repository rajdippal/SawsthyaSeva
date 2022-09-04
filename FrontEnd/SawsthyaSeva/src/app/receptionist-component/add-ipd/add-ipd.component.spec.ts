import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIpdComponent } from './add-ipd.component';

describe('AddIpdComponent', () => {
  let component: AddIpdComponent;
  let fixture: ComponentFixture<AddIpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
