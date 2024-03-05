import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [NgFor,]
})
export class NavBarComponent {

  public MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];

}
