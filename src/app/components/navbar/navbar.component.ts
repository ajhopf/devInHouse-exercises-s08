import { Component } from '@angular/core';
import { images } from 'src/app/constants/images-src';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'ntap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  headerImage: Image = images.find(image => image.location === 'header')!;
}
