import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysLough } from './always-lough';

describe('AlwaysLough', () => {
  let component: AlwaysLough;
  let fixture: ComponentFixture<AlwaysLough>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlwaysLough]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlwaysLough);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
