import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent implements OnInit {
  collapsed: boolean =false;
  showMenu: string;
  pushRightClass: string;


  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router,@Inject(PLATFORM_ID) private platformId: any) {
    this.router.events.subscribe(val => {
        if (this.isToggled()) {
            this.toggleSidebar();
        }
    });
}

  ngOnInit(): void {
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }


addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}

toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}

// isToggled(): boolean {
//     // const dom :any = document.querySelector('body');
//     // return dom.classList.contains(this.pushRightClass);
//     return document.body.classList.contains(this.pushRightClass);

// }
  // Check if the code is running in the browser
  
  isToggled(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return  window.document.body.classList.contains(this.pushRightClass);
    }
    return false; // Return false if not in browser
  }


// toggleSidebar() {
//     // const dom: any = document.querySelector('body');
//     // dom.classList.toggle(this.pushRightClass);
//     document.body.classList.toggle(this.pushRightClass);
//     this.isActive = !this.isActive; // Update the `isActive` state accordingly
// }
  // Toggle the sidebar push-right class on the body element
  toggleSidebar(): void {
    if (isPlatformBrowser(this.platformId)) {
        window.document.body.classList.toggle(this.pushRightClass);
      //this.isActive = !this.isActive; // Update the `isActive` state accordingly
    }
  }

// rltAndLtr() {
//     // const dom: any = document.querySelector('body');
//     // dom.classList.toggle('rtl');
//     document.body.classList.toggle('rtl');
// }

  // Toggle RTL and LTR modes on the body element
  toggleRtlLtr(): void {
    if (isPlatformBrowser(this.platformId)) {
        window.document.body.classList.toggle('rtl');
    }
  }

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
