import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
   standalone: true,
   imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  isMenuOpen: boolean = false;
  openSubmenu: string | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu(menuName: string) {
    this.openSubmenu = this.openSubmenu === menuName ? null : menuName;
  }
}
