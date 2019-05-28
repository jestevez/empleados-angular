import { TestBed } from '@angular/core/testing';

import { MessagesMockService } from './messages-mock.service';

describe('MessagesMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesMockService = TestBed.get(MessagesMockService);
    expect(service).toBeTruthy();
  });
});
