import { TestBed } from '@angular/core/testing';

import { MenusService } from './menus.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenusService = TestBed.get(MenusService);
    expect(service).toBeTruthy();
  });
});
