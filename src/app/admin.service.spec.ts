import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Report } from './models/report.models';

describe('AdminService', () => {
  let service: AdminService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [ AdminService ]
    });
    service = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAdminMessages() should http GET admin logs', () => {
    let expectedAdminMessages: Report[] = [
      {
        "_id": "607702a5b0ecbbef30507503",
        "reporter": "607701d0b0ecbbef305074fc",
        "reported": "607701f9b0ecbbef305074fe",
        "msg": "Il est po gentil",
        "validation": false,
        "reporterUsername": "TheGregouze",
        "reportedUsername": "Dax"
    },
    {
        "_id": "6077038fb0ecbbef30507506",
        "reporter": "6077023db0ecbbef30507502",
        "reported": "607701f9b0ecbbef305074fe",
        "msg": "Il est mauvais. Pas bon aim.",
        "validation": false,
        "reporterUsername": "Seb",
        "reportedUsername": "Dax"
    }
    ]
    service.getAdminMessages().subscribe( adminMessages => {
      expect(adminMessages).toEqual(expectedAdminMessages), fail
    });

    const req = httpMock.expectOne(`${service.url}admin/reports`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedAdminMessages);
  });
});
