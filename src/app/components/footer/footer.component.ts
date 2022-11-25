import { Component } from '@angular/core';
import { NAVLINKS } from 'src/app/constants/nav-links';
import { NavLink } from 'src/app/models/navlink';

@Component({
  selector: 'ntap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  navLinks: NavLink[] = NAVLINKS;
}
