import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChatRoomComponent } from './game-chat-room.component';

describe('GameChatRoomComponent', () => {
  let component: GameChatRoomComponent;
  let fixture: ComponentFixture<GameChatRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameChatRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameChatRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
