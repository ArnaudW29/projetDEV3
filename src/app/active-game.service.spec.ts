import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ActiveGameService } from './active-game.service';

describe('ActiveGameService', () => {
  let service: ActiveGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ActiveGameService]
    });
    service = TestBed.inject(ActiveGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
