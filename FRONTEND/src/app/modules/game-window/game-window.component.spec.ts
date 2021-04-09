import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWindowComponent } from './game-window.component';

describe('GameWindowComponent', () => {
  let component: GameWindowComponent;
  let fixture: ComponentFixture<GameWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
