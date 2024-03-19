import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [SlickCarouselModule, NgOptimizedImage,]
})


export class HeroComponent {
  slideConfig = {
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": false,
    "pauseOnFocus": true,
    "infinite": true,
    "cssEase": "ease-in-out"
  };





  HeroData = [
    {
      id: 1,
      subtitle: "Beats Solo",
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/hero/headphone.png?raw=true",
      title: "Wireless",
      title2: "Headphone",
    },
    {
      id: 2,
      subtitle: "Beats Solo",
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/hero/watch.png?raw=true",
      title: "Wireless",
      title2: "SmartWatch",
    },
    {
      id: 3,
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/Category/gaming.png?raw=true",
      subtitle: "Beats Solo",
      title: "Branded",
      title2: "Console",
    },
  ];

}
