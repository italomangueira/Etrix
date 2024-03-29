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
      image: "https://github.com/italomangueira/Etrix/blob/master/src/assets/blogs/blog-1.jpg?raw=true",
      aosDelay: "0",
    },
    {
      title: "How to choose perfect gadget",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      published: "Jan 20, 2024 by Satya",
      image: "https://github.com/italomangueira/Etrix/blob/master/src/assets/blogs/blog-2.jpg?raw=true",
      aosDelay: "200",
    },
    {
      title: "How to choose perfect VR headset",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      published: "Jan 20, 2024 by Sabir",
      image: "https://github.com/italomangueira/Etrix/blob/master/src/assets/blogs/blog-3.jpg?raw=true",
      aosDelay: "400",
    },
  ];
}
