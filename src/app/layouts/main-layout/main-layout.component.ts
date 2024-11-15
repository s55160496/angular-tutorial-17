import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from "./main-header/main-header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MainHeaderComponent,RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
