import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuliaComponent } from './julia.component';

describe('JuliaComponent', () => {
  let component: JuliaComponent;
  let fixture: ComponentFixture<JuliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
