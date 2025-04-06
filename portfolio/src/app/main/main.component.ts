import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { SeperatorComponent } from "../shared/seperator/seperator.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, HeaderComponent, SeperatorComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
