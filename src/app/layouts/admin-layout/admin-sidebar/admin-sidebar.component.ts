import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminSidebarService } from './admin-sidebar.service';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent implements OnInit {
  showMenu: string;

  isCollapsed = false;

  constructor(private adminsidebarService: AdminSidebarService) {
    this.adminsidebarService.toggleSidebar$.subscribe(state => {
      this.isCollapsed = state;
    });
}

  ngOnInit(): void {
  }


addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}
// isCollapsed = false;
// toggleSidebar() {
//   this.isCollapsed = !this.isCollapsed;
// }

changeLang(language: string) {
   // this.translate.use(language);
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
