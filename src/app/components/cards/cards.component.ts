import { Component, Input } from '@angular/core';
import { NoimagePipe } from "../../pipes/noimage.pipe";

@Component({
  selector: 'app-cards',
  imports: [NoimagePipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() items: any[] = [];


}
