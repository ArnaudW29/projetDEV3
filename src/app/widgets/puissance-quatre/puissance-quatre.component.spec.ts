import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuissanceQuatreComponent } from './puissance-quatre.component';

describe('PuissanceQuatreComponent', () => {
  let component: PuissanceQuatreComponent;
  let fixture: ComponentFixture<PuissanceQuatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuissanceQuatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuissanceQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
