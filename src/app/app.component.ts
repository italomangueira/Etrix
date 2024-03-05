import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./src/components/nav-bar/nav-bar.component";
import { HeroComponent } from "./src/components/hero/hero.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, HeroComponent]
})
export class AppComponent {
  title = 'Nike';
}
