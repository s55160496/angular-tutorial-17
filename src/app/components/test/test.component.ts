import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { users } from '../../_model/user';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import {DataTablesModule } from 'angular-datatables'
import { Config } from 'datatables.net';

import Swal from 'sweetalert2';
import { LoadingService } from '../../_services/loading.service';
import { AlertService } from '../../_services/alert.service';
import { VoidTableComponent } from "../../reusable/void-table/void-table.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, DataTablesModule, VoidTableComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent  implements OnInit,OnDestroy{

  datausers : any[]=[];

  columnArray :any [] = [
    {header : 'First',fieldName:'name' ,dataType :'string'},
    {header : 'Last' ,fieldName:'username',dataType :'string'},
    {header : 'Email' ,fieldName:'email',dataType :'string'},
    {header : 'CreateDate' ,fieldName:'createdate',dataType :'date'},
    {header : 'UpdateDate' ,fieldName:'updatedate',dataType :'date'},
  ];
  // dtOptions: Config = {};
  // dtTrigger: Subject<any> = new Subject();

  isLoading = false;

  @Output() OnEdit = new EventEmitter<any>();
  @Output() OnDelete = new EventEmitter<any>();

  constructor(private service : UserService,private loadingService: LoadingService,private alertService: AlertService){}

  
  ngOnInit(): void {
   
    this.loadDataUser();

    // this.dtOptions = {
    //   pagingType:'full_numbers',
    //   pageLength: 5,
    //   destroy: true,
    //   paging: false, 
    //   searching: false 
    // }
    // this.dtoptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   destroy: true
    // };

    // this.loadingService.loading$.subscribe((loading) => {
    //   this.isLoading = loading;
    // });
  }

  ngOnDestroy(): void {
     // Do not forget to unsubscribe the event
    //this.dtTrigger.unsubscribe();
  }

  loadDataUser (){
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    // .subscribe({
    //   next:(data:any) =>{
    //     console.log(data);
    //     this.dataUser = data;
    //   },error:(err) => console.log(err)
    // })
debugger
    this.service.Loadusers().subscribe({
      next:(data:any[])=>{
        console.log(data);
         this.datausers = data;
         this.datausers.forEach(element => {
          element.createdate = new Date();
          element.updatedate = new Date();
         });
        // this.dtTrigger.next(null);
      },error(err) {
        console.log(err)
      },
    })
  }

  deleteuser(data :any){
    console.log(data);
    // this.alertService.AlertConfirm(
    //   'Service Alert',
    //   'This alert was triggered by a service.',
    //   () => {
    //     // Code to run when the user clicks "Yes"
    //     console.log('User confirmed the alert');
    //     this.performActionOnConfirm();
    //   },
    //   () => {
    //     // Code to run when the user clicks "No" (optional)
    //     console.log('User cancelled the alert');
    //     this.performActionOnCancel();
    //   }
    // );

   // this.OnDelete.emit(item);
  }

  edituser(data:any){
    console.log(data);
    //this.OnEdit.emit(item);
    // this.alertService.AlertConfirm(
    //   'Service Alert',
    //   'This alert was triggered by a service.',
    //   () => {
    //     // Code to run when the user clicks "Yes"
    //     console.log('User confirmed the alert');
    //     this.performActionOnConfirm();
    //   },
    //   () => {
    //     // Code to run when the user clicks "No" (optional)
    //     console.log('User cancelled the alert');
    //     this.performActionOnCancel();
    //   }
    // );
  }

  performActionOnConfirm() {
    // Your logic for the confirm action
    alert('Confirmed action executed!');
  }
  
  performActionOnCancel() {
    // Your logic for the cancel action
    alert('Cancelled action executed!');
  }
}
