import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent  implements OnInit{
  public dataUser : Array<any> = [];

  httpClient = inject(HttpClient);
  constructor(){}

  ngOnInit(): void {
    this.loadDataUser();
  }

  loadDataUser () : void{
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    .subscribe({
      next:(data:any) =>{
        console.log(data);
        this.dataUser = data;
      },error:(err) => console.log(err)
    })
  }

}
