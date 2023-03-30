import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  slides = [
    {img: "../../../assets/images/download (1).png"},
    {img: "../../../assets/images/download (2).png"},
    {img: "../../../assets/images/download (3).png"},
    {img: "../../../assets/images/download.png"}
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
