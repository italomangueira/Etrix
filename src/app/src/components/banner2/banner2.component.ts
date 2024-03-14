import { Component } from '@angular/core';

@Component({
  selector: 'app-banner2',
  standalone: true,
  imports: [],
  templateUrl: './banner2.component.html',
  styleUrl: './banner2.component.css'
})
export class Banner2Component {
  DataBanner = [
    {
      discount: "30% OFF",
      title: "Happy Hours",
      date: "14 Jan to 28 Jan",
      image: "https://github.com/italomangueira/Etrix/blob/master/src/assets/Category/smartwatch2-removebg-preview.png?raw=true",
      title2: "Smart Solo",
      title3: "Winter Sale",
      title4:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
      bgColor: "bg-brandGreen",
    }
  ]
}
