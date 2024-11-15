import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent implements OnInit {

  
  @ViewChild('sidebar') sidebar?: AdminSidebarComponent;
  public pushRightClass: string;
  
  isSidebarOpen = true;

//   constructor(public router: Router, @Inject(PLATFORM_ID) private platformId: any) {
//     // Listen for navigation end events to toggle sidebar if needed
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         this.checkWindowAndToggle();
//       }
//     });
//   }

//   // Check window width and whether sidebar is toggled
//   checkWindowAndToggle() {
//     if (isPlatformBrowser(this.platformId)) {
//       if (window.innerWidth <= 992 && this.isToggled()) {
//         this.toggleSidebar();
//       }
//     }

//   //   this.router.events.subscribe(val => {
//   //     if (
//   //         val instanceof NavigationEnd
//   //          &&
//   //         window.innerWidth <= 992 &&
//   //         this.isToggled()
//   //     ) {
//   //         this.toggleSidebar();
//   //     }
//   // });
// }

isBrowser: boolean;

constructor(public router: Router,@Inject(PLATFORM_ID) private platformId: Object) {

  this.isBrowser = isPlatformBrowser(this.platformId);

this.router.events.subscribe((val) => {
    if (
      val instanceof NavigationEnd &&
      isPlatformBrowser(this.platformId) &&
      window.innerWidth <= 992 &&
      this.isToggled()
    ) {
      this.toggleSidebar();
    }
  });
}

ngOnInit() {
  this.pushRightClass = 'push-right';
}

isToggled(): boolean {
  const dom: any = document.querySelector('body');
  return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
  const dom: any = document.querySelector('body');
  dom.classList.toggle(this.pushRightClass);
}

rltAndLtr() {
  const dom: any = document.querySelector('body');
  dom.classList.toggle('rtl');
}

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('payweb3_initiate');
    localStorage.removeItem('PAY_REQUEST_ID');
    localStorage.removeItem("PAY_REQUEST_ID_WEB");
    localStorage.removeItem("PAY_GATE_ID_WEB");
    localStorage.removeItem("REFERENCE_WEB");
    localStorage.removeItem("ENCRYPTION_KEY_WEB");
}

}
