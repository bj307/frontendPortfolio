import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbankComponent } from './dashbank.component';

describe('DashbankComponent', () => {
  let component: DashbankComponent;
  let fixture: ComponentFixture<DashbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
