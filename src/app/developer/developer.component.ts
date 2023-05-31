import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

developer : Developer = new Developer(
"Nguyen",
"Richard",
49,
"homme",
"étudiant",
[
  {name:"HTML",logo:"logo",site:"amazon.fr"},
  {name:"CSS",logo:"logo2",site:"aliexpress.fr"}
]
);


}
