import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomsListComponent } from './game-rooms-list.component';

describe('GameRoomsListComponent', () => {
  let component: GameRoomsListComponent;
  let fixture: ComponentFixture<GameRoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRoomsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
