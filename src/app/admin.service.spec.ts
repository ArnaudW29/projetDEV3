import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ AdminService ]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
