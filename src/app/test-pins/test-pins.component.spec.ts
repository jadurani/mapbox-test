import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPinsComponent } from './test-pins.component';

describe('TestPinsComponent', () => {
  let component: TestPinsComponent;
  let fixture: ComponentFixture<TestPinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
