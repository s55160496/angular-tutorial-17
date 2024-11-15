import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class AdminSidebarService {
  private isSidebarCollapsed = new BehaviorSubject<boolean>(window.innerWidth <= 992);
  toggleSidebar$ = this.isSidebarCollapsed.asObservable();

  constructor() {
       // Initial check on load
    this.checkScreenWidth();
    // Listen for resize events
    window.addEventListener('resize', () => this.checkScreenWidth());
  }

  toggle() {
    this.isSidebarCollapsed.next(!this.isSidebarCollapsed.value);
  }

  private checkScreenWidth() {
    const shouldCollapse = window.innerWidth <= 992;
    if (this.isSidebarCollapsed.value !== shouldCollapse) {
      this.isSidebarCollapsed.next(shouldCollapse);
    }
  }
}
