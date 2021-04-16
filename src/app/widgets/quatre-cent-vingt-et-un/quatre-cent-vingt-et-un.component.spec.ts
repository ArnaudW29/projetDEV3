import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatreCentVingtEtUnComponent } from './quatre-cent-vingt-et-un.component';

describe('QuatreCentVingtEtUnComponent', () => {
  let component: QuatreCentVingtEtUnComponent;
  let fixture: ComponentFixture<QuatreCentVingtEtUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatreCentVingtEtUnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatreCentVingtEtUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
