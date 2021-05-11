// default imports
import { TestBed } from '@angular/core/testing';

// tested component import
import { ActiveGameService } from './active-game.service';

// test http
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// model imports
import { Score } from './models/score.models';

describe('ActiveGameService', () => {
  let service: ActiveGameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActiveGameService]
    });
    service = TestBed.inject(ActiveGameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.changeActiveGame("morpion");
  });

  it('should change the active game', (done) => {
    service.changeActiveGame("morpion");
    service.activeGame$.subscribe(activeGame => {
      expect(activeGame).toBe("morpion");
      done();
    });
  });

  it('getDescription() should http GET active game description', () => {
    service.changeActiveGame("newActiveGame");
    let expectedDescription: string = "game description";
    service.getDescription().subscribe( description => {
      expect(description).toEqual(expectedDescription), fail
    });

    const req = httpMock.expectOne(`${service.url}description/${service.game_url}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedDescription);
  });

  it('getLeaderboard() should http GET active game leaderboard', () => {
    service.changeActiveGame("newActiveGame");
    let expectedLeaderboard: Score[] = [
      { pseudo: "pseudo1", score: "1"},
      { pseudo: "pseudo2", score: "2"},
      { pseudo: "pseudo3", score: "3"},
      { pseudo: "pseudo4", score: "4"}
    ] as Score[];
    service.getLeaderboard().subscribe( leaderboard => {
      expect(leaderboard).toBe(expectedLeaderboard), fail
    });

    const req = httpMock.expectOne(`${service.url}leaderboard/${service.game_url}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedLeaderboard);
  });
});
