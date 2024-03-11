import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  public ServiceData = [
    {
      id: 1,
      icon: "",
      title: "Free Shipping",
      description: "Free Shipping On All Order",
    },
    {
      id: 2,
      icon: "",
      title: "Safe Money ",
      description: "30 Days Money Back",
    },
    {
      id: 3,
      icon: "",
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: "",
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ]
}
