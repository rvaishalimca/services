import { TestBed } from '@angular/core/testing';

import { MydetailserviceService } from './mydetailservice.service';

describe('MydetailserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MydetailserviceService = TestBed.get(MydetailserviceService);
    expect(service).toBeTruthy();
  });
});
