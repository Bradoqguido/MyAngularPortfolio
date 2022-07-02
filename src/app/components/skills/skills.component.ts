import { Component, OnInit } from '@angular/core';

export interface skillsInterface {
  name: string;
  imgURL: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  // accepted heights: 16, 24, 32, 48, 64, 96 ...
  imgHeight = 48;

  skills: skillsInterface[] = [
    { name: 'Angular', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/angular-3-226070.png` },
    { name: 'React', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/react-3-1175109.png`},
    { name: 'PostgreSQL', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/postgresql-226047.png` },
    { name: 'Firebase FireStore', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/firebase-1-282796.png` },
    { name: 'TypeScript', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/typescript-1-1175078.png` },
    { name: 'Java Script', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/logo-1889528-1597588.png` },
    { name: 'CSS', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/css-38-226095.png` },
    { name: 'HTML', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/html-59-225995.png` },
    { name: 'Git', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/git-1-226092.png`},
    { name: 'Python', imgURL: `https://cdn.iconscout.com/icon/free/png-${this.imgHeight}/python-14-569257.png` },
    { name: 'C#', imgURL: 'assets/images/c-sharp-48-48.png'}
  ];

  // adicionar C#

  ngOnInit() {
  }

}
