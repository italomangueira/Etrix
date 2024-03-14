import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  ProductsData = [
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-1.jpg?raw=true",
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-2.jpg?raw=true",
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-3.jpg?raw=true",
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-4.jpg?raw=true",
      title: "Printed ",
      price: "220",
      aosDelay: "600",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-5.jpg?raw=true",
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-7.jpg?raw=true",
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-9.jpg?raw=true",
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      img: "https://github.com/dilshad-ahmed/Eshop-TCJ/blob/main/src/assets/product/p-1.jpg?raw=true",
      title: "Printed ",
      price: "220",
      aosDelay: "600",
    },
  ];
}
