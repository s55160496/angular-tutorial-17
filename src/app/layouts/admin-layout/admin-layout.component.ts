import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from "./admin-header/admin-header.component";
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from "./admin-sidebar/admin-sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, AdminHeaderComponent, AdminSidebarComponent,CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent implements OnInit {
  collapedSideBar: boolean = false;
 
  
  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event: boolean) {
      this.collapedSideBar = $event;
      console.log('Sidebar collapsed state:', this.collapedSideBar); // Optionally log it

  }

}
