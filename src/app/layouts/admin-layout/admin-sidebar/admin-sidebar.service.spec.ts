import { TestBed } from '@angular/core/testing';

import { AdminSidebarService } from './admin-sidebar.service';

describe('AdminSidebarService', () => {
  let service: AdminSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
