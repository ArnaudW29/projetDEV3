import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngameSidebarComponent } from './ingame-sidebar.component';

describe('IngameSidebarComponent', () => {
  let component: IngameSidebarComponent;
  let fixture: ComponentFixture<IngameSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngameSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngameSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
