import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHistory } from './our-history';

describe('OurHistory', () => {
  let component: OurHistory;
  let fixture: ComponentFixture<OurHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
