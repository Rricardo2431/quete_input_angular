import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() name: string = "";
  @Input() logo: string = "";
  @Input() site: string = "";
}
