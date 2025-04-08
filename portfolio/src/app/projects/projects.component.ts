import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'FluentDigits',
      description: 'A way to practice numbers in a different language',
      image: 'projects/fluentDigits.png',
      live: 'https://fluentdigits.com',
      gitLink: 'https://github.com/hakDimoz/fluentDigits',
      technology: [
        { name: 'Angular', icon: 'technology/angular.svg' },
        { name: 'TypeScript', icon: 'technology/typescript.svg' },
        { name: 'Tailwind CSS', icon: 'technology/tailwind.svg' },
        { name: 'Node JS', icon: 'technology/node.svg' },
        { name: 'Express', icon: 'technology/express.svg' },
      ],
    },
    {
      title: 'WeedHak',
      description: 'Made for my gardening business',
      image: 'projects/weedHak.png',
      gitLink: 'https://github.com/hakDimoz/weedHak',
      live: 'https://weedhak.pro',
      technology: [
        { name: 'JavaScript', icon: 'technology/javascript.svg' },
        { name: 'Tailwind CSS', icon: 'technology/tailwind.svg' },
      ],
    },
    {
      title: 'Pals Plan',
      description: 'Makes planning hangouts with friends easy -- Developed in a hackathon',
      image: 'projects/palsPlan.png',
      gitLink: 'https://github.com/derrrna/ieye-unihack-2025',
      technology: [
        { name: 'React', icon: 'technology/react.svg' },
        { name: 'MongoDB', icon: 'technology/mongoDB.svg' },
        { name: 'Node JS', icon: 'technology/node.svg' },
        { name: 'Express', icon: 'technology/express.svg' },
      ]
    },
  ];
}
