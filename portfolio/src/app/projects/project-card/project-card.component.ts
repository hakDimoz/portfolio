import { Component, input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
