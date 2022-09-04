import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpdComponent } from './view-ipd.component';

describe('ViewIpdComponent', () => {
  let component: ViewIpdComponent;
  let fixture: ComponentFixture<ViewIpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
