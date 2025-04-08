import { Component } from '@angular/core';
import { IconComponent } from "../shared/socials/icon/icon.component";
import { SocialsComponent } from "../shared/socials/socials.component";

@Component({
  selector: 'app-contact',
  imports: [IconComponent, SocialsComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

}
