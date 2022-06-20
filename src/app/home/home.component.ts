import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productlist=[
    {
      image:"assets/images/indianwear.webp"
    },
    {
      image:"assets/images/westernwear.webp"
    },
    {
      image:"assets/images/sunglass.jpg"
    },
    {
      image:"assets/images/bags.jpg"
    },
    {
      image:"assets/images/footwear.jpg"
    },
    {
      image:"assets/images/jwellary.jpg"
    },
    {
      image:"assets/images/tech.jpg"
    },
    {
      image:"assets/images/hidden.jpg"
    },
    {
      image:"assets/images/watches.jpg"
    },
    {
      image:"assets/images/sportswear.jpg"
    },
  
  ]

  productbanner=[
    {
      image:"assets/images/banner66.jpeg"
    },
    {
      image1:"assets/images/shippingbanner.webp"
    }
  ]

  videotag={
    imagevide:"assets/images/straming.jpg"
  }

  reviewtag={
    reviewtitle:"assets/images/reviewtitle.webp"
  }

  review=[
  
    {review1:"assets/images/review1.webp"},
    {review1:"assets/images/review2.webp"},
    {review1:"assets/images/review3.webp"},
    {review1:"assets/images/review4.webp"},
  ]

}
