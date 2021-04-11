import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameExpandedComponent } from './game-expanded.component';

describe('GameExpandedComponent', () => {
  let component: GameExpandedComponent;
  let fixture: ComponentFixture<GameExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
