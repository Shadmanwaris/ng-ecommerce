import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = 'landing';
  url = 'https://api.unsplash.com/';
  isDragging = false;

  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
  carousel: any;
  startX: any;
  startScrollLeft: any;
  arrowButtons: any;
  firstCardWidth: any;
  carouselChildrens: any[] = [];
  showMenu: boolean = false;
  showMegaMenu: boolean = false;

  constructor () {

  }
  ngAfterContentInit() {
    this.carousel = document.querySelector(".carousel");

    this.arrowButtons = document.querySelector(".section-third-card-wrapper i");
    this.firstCardWidth = this.carousel.querySelector(".card").offsetWidth;
    this.carouselChildrens = [...this.carousel.children];
    let carPerView = Math.round(this.carousel.offsetWidth / this.firstCardWidth);
    this.carouselChildrens.slice(-carPerView).reverse().forEach(card => {
      this.carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    this.carouselChildrens.slice(0, carPerView).forEach(card => {
      this.carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
  }

  onMouseMove(e: any) {
    if (!this.isDragging) return;
    this.carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
    console.log(e.pageX);

  }

  onMouseDown(e: any) {
    this.isDragging = true;
    this.carousel.classList.add("dragging");
    this.startX = e.pageX;
    this.startScrollLeft = this.carousel.scrollLeft;
  }

  onMouseup(e: any) {
    this.isDragging = false;
    this.carousel.classList.remove("dragging");
  }

  arrowButton(e: any, pos: any) {
    this.carousel.scrollLeft += pos === "left" ? -this.firstCardWidth : this.firstCardWidth;

  }

  infiniteScroll(e: any) {
    if (this.carousel.scrollLeft == 0) {
      this.carousel.classList.add("no-transition");
      this.carousel.scrollLeft = this.carousel.scrollWidth - (2 * this.carousel.offsetWidth);
      this.carousel.classList.remove("no-transition");
    } else if (Math.ceil(this.carousel.scrollLeft) === this.carousel.scrollWidth - this.carousel.offsetWidth) {
      this.carousel.classList.add("no-transition");
      this.carousel.scrollLeft = this.carousel.offsetWidth;
      this.carousel.classList.remove("no-transition");
    }
  }

  megaSubMenuMouseEnter(e: any, type: any) {
    if (e) {
      console.log(e);

    }
  }
}
