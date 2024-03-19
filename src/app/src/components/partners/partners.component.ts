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
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/partners/br-1.png?raw=true"
    },
    {
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/partners/br-2.png?raw=true"
    },
    {
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/partners/br-3.png?raw=true"
    },
    {
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/partners/br-4.png?raw=true"
    },
    {
      img: "https://github.com/italomangueira/Etrix/blob/master/src/assets/partners/br-5.png?raw=true"
    }
  ]
}
