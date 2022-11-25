import { Component } from '@angular/core';

@Component({
  selector: 'ntap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navLinks = [{
    title: 'Home',
    src: '#'
  },
  {
    title: 'Pricing',
    src: '#'
  },
  {
    title: 'FAQs',
    src: '#'
  },
  {
    title: 'About',
    src: '#'
  }
  ];
}
