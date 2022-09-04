import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdHistoryComponent } from './ipd-history.component';

describe('IpdHistoryComponent', () => {
  let component: IpdHistoryComponent;
  let fixture: ComponentFixture<IpdHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
