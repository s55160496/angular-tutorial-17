import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component';

const routes: Routes = [
];

@NgModule({  
  imports: [RouterModule]
})
export class MainLayoutRoutingModule {}
