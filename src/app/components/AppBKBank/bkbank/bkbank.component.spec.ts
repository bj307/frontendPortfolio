import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkbankComponent } from './bkbank.component';

describe('BkbankComponent', () => {
  let component: BkbankComponent;
  let fixture: ComponentFixture<BkbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BkbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
