import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomerceComponent } from './ecomerce.component';

describe('EcomerceComponent', () => {
  let component: EcomerceComponent;
  let fixture: ComponentFixture<EcomerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
