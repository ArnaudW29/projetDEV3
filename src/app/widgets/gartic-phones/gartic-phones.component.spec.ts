import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarticPhonesComponent } from './gartic-phones.component';

describe('GarticPhonesComponent', () => {
  let component: GarticPhonesComponent;
  let fixture: ComponentFixture<GarticPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarticPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarticPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
