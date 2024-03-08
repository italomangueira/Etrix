import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./src/components/nav-bar/nav-bar.component";
import { HeroComponent } from "./src/components/hero/hero.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoryComponent } from "./src/components/category/category.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, HeroComponent, SlickCarouselModule, CategoryComponent]
})
export class AppComponent {
  title = 'ETRIX';
}
