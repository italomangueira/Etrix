import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos';

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
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-1.jpg",
      title: "Boat Headphone",
      price: "120",
      aosDelay: 0,
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-2.jpg",
      title: "Smart Watch",
      price: "420",
      aosDelay: "200",
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-3.jpg",
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-5.jpg",
      title: "Printed ",
      price: "220",
      aosDelay: "600",
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-7.jpg",
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-9.jpg",
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/products/p-1.jpg",
      title: "Boat Headphone",
      price: "120",
      aosDelay: 0,
    },
  ];
}
