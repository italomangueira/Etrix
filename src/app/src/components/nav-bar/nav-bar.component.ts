import { NgFor } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [NgFor,]
})
export class NavBarComponent {
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {return this.darkMode(); }

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
