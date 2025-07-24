import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSmile } from './your-smile';

describe('YourSmile', () => {
  let component: YourSmile;
  let fixture: ComponentFixture<YourSmile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourSmile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourSmile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
