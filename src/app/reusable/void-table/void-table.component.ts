import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,output,Output } from '@angular/core';

@Component({
  selector: 'app-void-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './void-table.component.html',
  styleUrl: './void-table.component.scss'
})
export class VoidTableComponent {

  @Input() tableData : any[] = [];
  @Input() columnArray : any[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();


  @Input() showActionButton : boolean =   false;

  columnKeys :string[]=[];

  constructor(){
    debugger
    if(this.tableData.length >0)
      this.columnKeys = Object.keys(this.tableData[0]);
  }

  editRecord(item:any){
this.onEdit.emit(item);
  }

  deleteRecord(item:any){
    this.onDelete.emit(item);
  }
}
