import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  link = input.required<String>();
}
