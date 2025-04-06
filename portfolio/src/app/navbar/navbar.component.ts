import { Component, signal } from '@angular/core';
import { NavItemsComponent } from "./nav-items/nav-items.component";

@Component({
  selector: 'app-navbar',
  imports: [NavItemsComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
 
}
