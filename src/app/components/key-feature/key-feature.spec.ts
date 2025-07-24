import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeature } from './key-feature';

describe('KeyFeature', () => {
  let component: KeyFeature;
  let fixture: ComponentFixture<KeyFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
