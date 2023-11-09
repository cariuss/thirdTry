import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguinrealComponent } from './loguinreal.component';

describe('LoguinrealComponent', () => {
  let component: LoguinrealComponent;
  let fixture: ComponentFixture<LoguinrealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoguinrealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoguinrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
