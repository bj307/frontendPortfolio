import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotaComponent } from './addnota.component';

describe('AddnotaComponent', () => {
  let component: AddnotaComponent;
  let fixture: ComponentFixture<AddnotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
