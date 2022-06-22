import { TestBed } from '@angular/core/testing';

import { BlogtudosobrejaoService } from './blogtudosobrejao.service';

describe('BlogtudosobrejaoService', () => {
  let service: BlogtudosobrejaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogtudosobrejaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
