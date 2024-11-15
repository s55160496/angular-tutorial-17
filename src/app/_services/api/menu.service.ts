import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { sideNavItems, sideNavSections } from '../../data/side-nav.data';

@Injectable({
  providedIn: 'root'
})

export class MenuService implements OnInit {

    sideNavItems = sideNavItems;
    sideNavSections = sideNavSections;

  constructor(private http:HttpClient) { 
  
  }

  ngOnInit(): void {
      
  }

  loadData(){

   // return SideNavSection[] :SideNavSection;
    //return this.http.get<SideNavSection>();

  }

}
