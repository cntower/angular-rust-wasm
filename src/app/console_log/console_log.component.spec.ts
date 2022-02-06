import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Console_logComponent } from './console_log.component';

describe('ConsoleLogComponent', () => {
  let component: Console_logComponent;
  let fixture: ComponentFixture<Console_logComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Console_logComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Console_logComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
