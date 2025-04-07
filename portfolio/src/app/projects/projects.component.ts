import { Component } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'FluentDigits',
      description: 'Description for project 1',
      image: 'projects/fluentDigits.png',
      live: 'https://fluentdigits.com',
      gitLink: 'https://github.com/hakDimoz/fluentDigits',
      technology: [
        { name: 'Angular', icon: 'assets/angular-icon.png' },
        { name: 'TypeScript', icon: 'assets/typescript-icon.png' },
      ],
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      image: 'assets/project2.jpg',
      gitLink: 'https://example.com/project2',
      technology: [
        { name: 'React', icon: 'assets/react-icon.png' },
        { name: 'JavaScript', icon: 'assets/javascript-icon.png' },
      ],
    },
  ];
}
