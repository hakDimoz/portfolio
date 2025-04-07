import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { SeperatorComponent } from "../shared/seperator/seperator.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, HeaderComponent, SeperatorComponent, ProjectsComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
