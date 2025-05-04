import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {
  DataBanner = [
    {
      discount: "30% OFF",
      title: "Fine Smile",
      date: "10 Jan to 28 Jan",
      image: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/hero/headphone.png",
      title2: "Air Solo Bass",
      title3: "Winter Sale",
      title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
      bgColor: "bg-primary",
    }
  ]
}
