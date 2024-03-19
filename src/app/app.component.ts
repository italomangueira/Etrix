import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./src/components/nav-bar/nav-bar.component";
import { HeroComponent } from "./src/components/hero/hero.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoryComponent } from "./src/components/category/category.component";
import { ServicesComponent } from "./src/components/services/services.component";
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { BannerComponent } from "./src/components/banner/banner.component";
import { ProductsComponent } from "./src/components/products/products.component";
import { Banner2Component } from "./src/components/banner2/banner2.component";
import { BlogComponent } from "./src/components/blog/blog.component";
import { PartnersComponent } from "./src/components/partners/partners.component";
import { FooterComponent } from "./src/components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [IconSetService],
  imports: [RouterOutlet, NavBarComponent, HeroComponent, SlickCarouselModule, CategoryComponent, ServicesComponent, IconModule, BannerComponent, ProductsComponent, Banner2Component, BlogComponent, PartnersComponent, FooterComponent]
})
export class AppComponent {
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() { return this.darkMode(); }


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
  title = 'ETRIX';

}
