import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [ UserService ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmail() should http GET active user email', () => {
    service.currentUsername = "dummy username";
    let expectedEmail: string = "user@email.com";
    service.getEmail().subscribe( email => {
      expect(email).toEqual(expectedEmail), fail
    });

    const req = httpMock.expectOne(`${service.url}users/email/${service.currentUsername}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedEmail);
  });

  it('getUsernameFromId() should http GET username from id', () => {
    let dummyId = "dummy id";
    let expectedUsername: string = "dummy username";
    service.getUsernameFromId(dummyId).subscribe( username => {
      expect(username).toEqual(expectedUsername), fail
    });

    const req = httpMock.expectOne(`${service.url}users/username/${dummyId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedUsername);
  });
});
