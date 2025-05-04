import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  BlogData = [
    {
      title: "How to choose perfect smartwatch",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      published: "Jan 20, 2024 by Dilshad",
      image: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/blogs/blog-1.jpg",
      aosDelay: "0",
    },
    {
      title: "How to choose perfect gadget",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      published: "Jan 20, 2024 by Satya",
      image: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/blogs/blog-2.jpg",
      aosDelay: "200",
    },
    {
      title: "How to choose perfect VR headset",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      published: "Jan 20, 2024 by Sabir",
      image: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/blogs/blog-3.jpg",
      aosDelay: "400",
    },
  ];
}
