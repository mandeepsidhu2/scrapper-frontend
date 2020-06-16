import { TestBed } from '@angular/core/testing';

import { RssdataService } from './rssdata.service';

describe('RssdataService', () => {
  let service: RssdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RssdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
