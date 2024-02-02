import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nglib1Component } from './nglib1.component';

describe('Nglib1Component', () => {
  let component: Nglib1Component;
  let fixture: ComponentFixture<Nglib1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nglib1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Nglib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
