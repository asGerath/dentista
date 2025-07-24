import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServices } from './get-services';

describe('GetServices', () => {
  let component: GetServices;
  let fixture: ComponentFixture<GetServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
