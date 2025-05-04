import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  QuickLinks = [
    {
      title: "Portfolio",
      link: "https://portfolio-italo-m.vercel.app/",
    },
    {
      title: "GitHub",
      link: "https://github.com/italomangueira",
    },
    {
      title: "Email",
      link: "italo.mangueira@hotmail.com",
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/italo-mangueira-6a39b3211",
    },
  ]
}
