import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiercingComponent } from './piercing.component';

describe('PiercingComponent', () => {
  let component: PiercingComponent;
  let fixture: ComponentFixture<PiercingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiercingComponent]
    });
    fixture = TestBed.createComponent(PiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
