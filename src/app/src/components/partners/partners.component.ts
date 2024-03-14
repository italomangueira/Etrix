import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

  partners = [
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/brand/br-1.png?raw=true"
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/brand/br-2.png?raw=true"
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/brand/br-3.png?raw=true"
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/brand/br-4.png?raw=true"
    },
    {
      img:"https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/brand/br-5.png?raw=true"
    }
  ]
}
