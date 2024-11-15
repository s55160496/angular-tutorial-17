import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { isPlatformBrowser } from '@angular/common';
import { AdminSidebarService } from '../admin-sidebar/admin-sidebar.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent implements OnInit {
  @ViewChild('sidebar') sidebar?: AdminSidebarComponent;

  isCollapsed = false;
 
  constructor(
    public router: Router,private adminsidebarService: AdminSidebarService
  ) {
    //this.sidebar?.toggleSidebar();
  }

  //   constructor(public router: Router, @Inject(PLATFORM_ID) private platformId: any) {
  //     // Listen for navigation end events to toggle sidebar if needed
  //     this.router.events.subscribe((event) => {
  //       if (event instanceof NavigationEnd) {
  //         this.checkWindowAndToggle();
  //       }
  //     });
  //   }

    // Check window width and whether sidebar is toggled

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

  

 

  toggleSidebar() {
    this.adminsidebarService.toggle();
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
  ngOnInit() {}

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('payweb3_initiate');
    localStorage.removeItem('PAY_REQUEST_ID');
    localStorage.removeItem('PAY_REQUEST_ID_WEB');
    localStorage.removeItem('PAY_GATE_ID_WEB');
    localStorage.removeItem('REFERENCE_WEB');
    localStorage.removeItem('ENCRYPTION_KEY_WEB');
  }
}
