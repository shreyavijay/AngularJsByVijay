import { TestBed, inject } from '@angular/core/testing';

import { MenubarService } from './menubar.service';

describe('MenubarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenubarService]
    });
  });

  it('should be created', inject([MenubarService], (service: MenubarService) => {
    expect(service).toBeTruthy();
  }));
});
