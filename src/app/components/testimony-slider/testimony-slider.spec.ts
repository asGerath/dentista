import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonySlider } from './testimony-slider';

describe('TestimonySlider', () => {
  let component: TestimonySlider;
  let fixture: ComponentFixture<TestimonySlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonySlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonySlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
