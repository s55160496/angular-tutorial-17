import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { sideNavItems, sideNavSections } from '../../data/side-nav.data';
import { Observable } from 'rxjs';
import { SideNavSection } from '../../_model/menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService implements OnInit {

  const sideNavItems: any[] = [];
   Sections: SideNavSection[] = [];

  constructor(private http:HttpClient) { 
  
  }

  ngOnInit(): void {
      
  }

  loadData(){

   // return SideNavSection[] :SideNavSection;
    //return this.http.get<SideNavSection>();

  }

  fetchMenuData():Observable<SideNavSection[]>{
    return this.Sections = sideNavSections;
  }

}
