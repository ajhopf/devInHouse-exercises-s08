import { Component } from '@angular/core';
import { images } from 'src/app/constants/images-src';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'ntap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerImage: Image = images.find(image => image.location === 'header')!;
}
