import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SideNavItem, SideNavSection } from '../../_model/menu';

@Injectable({
  providedIn: 'root'
})

export class MenuService implements OnInit {

   NavItems: SideNavItem[] = [];
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
    return this.http.get<SideNavSection[]>('/api/menu'); // Replace with your API endpoint
  }

}
