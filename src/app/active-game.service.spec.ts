import { TestBed } from '@angular/core/testing';

import { ActiveGameService } from './active-game.service';

describe('ActiveGameService', () => {
  let service: ActiveGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
