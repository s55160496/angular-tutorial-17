import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgImageSliderModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  weaponsskins :any= [];
  imageObject : any =[];
  // imageObject = [
  //   {
  //     image: 'https://media.valorant-api.com/weaponskinlevels/578e9077-4f88-260c-e54c-b988425c60e4/displayicon.png',
  //     thumbImage: 'https://media.valorant-api.com/weaponskinlevels/578e9077-4f88-260c-e54c-b988425c60e4/displayicon.png',
  //     alt: 'Image 1',
  //     title: 'Image 1'
  //   },
  //   {
  //     image: 'https://example.com/image2.jpg',
  //     thumbImage: 'https://example.com/thumb2.jpg',
  //     alt: 'Image 2',
  //     title: 'Image 2'
  //   },
  //   {
  //     image: 'https://example.com/image3.jpg',
  //     thumbImage: 'https://example.com/thumb3.jpg',
  //     alt: 'Image 3',
  //     title: 'Image 3'
  //   }
  // ];

  constructor(private http:HttpClient){

  }

  arr: number[] = [1, 2, 3, 4, 5, 6,7,8];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;

  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() { 
    
    this.loadweaponsskins();

    this.totalCards = this.imageObject.length;

    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();

   
    
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages * 10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }


  loadweaponsskins() {
    this.http.get('https://valorant-api.com/v1/weapons/skins',{ observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.weaponsskins = response.body.data.slice(40,60); // Access the body of the response
          console.log('Weapon skins loaded:', this.weaponsskins);

          this.weaponsskins.forEach((_: any) => { 
            //imageObject
            let obj: any = {};
            obj.image = _.displayIcon;
            obj.thumbImage = _.displayIcon;
            obj.alt = _.displayName;
            obj.title = _.displayName;

            this.imageObject.push(obj);
        });
        } else {
          console.error('Unexpected status code:', response.status);
        }
      },
      (error) => {
        console.error('Error fetching weapon skins:', error);
      }
    );
  }
}