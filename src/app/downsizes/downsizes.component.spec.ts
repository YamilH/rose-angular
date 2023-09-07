import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownsizesComponent } from './downsizes.component';

describe('DownsizesComponent', () => {
  let component: DownsizesComponent;
  let fixture: ComponentFixture<DownsizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownsizesComponent]
    });
    fixture = TestBed.createComponent(DownsizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
