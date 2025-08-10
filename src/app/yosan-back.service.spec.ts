import { TestBed } from '@angular/core/testing';

import { YosanBackService } from './yosan-back.service';

describe('YosanBackService', () => {
  let service: YosanBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YosanBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
