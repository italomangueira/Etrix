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
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/partners/br-1.png"
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/partners/br-2.png"
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/partners/br-3.png"
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/partners/br-4.png"
    },
    {
      img: "https://raw.githubusercontent.com/italomangueira/Etrix/refs/heads/master/src/assets/partners/br-5.png"
    }
  ]
}
