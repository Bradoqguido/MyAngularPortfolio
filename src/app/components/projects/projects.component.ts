import { Component, OnInit } from '@angular/core';

export interface projectsInterface {
  name: string;
  imgURL: string;
  detailsParagraphs: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  // accepted heights: 16, 24, 32, 48, 64, 96 ...
  imgHeight = 48;

  projects: projectsInterface[] = [
    {
      name: 'Hackathon Online Management App',
      imgURL: 'assets/images/android-icon-48x48.png',
      detailsParagraphs: [
        'Hackathon Online management application for in-person and online events.',
        'Developed in angular with material design and firebase firestore.',
      ],
      url: 'https://hackathon-online.web.app'
    },
    {
      name: 'Pizzaria Management App',
      imgURL: 'assets/images/pizza-48x48.png',
      detailsParagraphs: [
        'Management application for Pizzarias with stock, grade, products, person access controls.',
        'Developed in angular with material design and firebase firestore.',
        'Comming soon: DashBoards, DRE, Payments (With Mercado Pago API).'
      ],
      url: 'https://ctrl-pizza.web.app'
    },
    {
      name: 'MapBox Angular App',
      imgURL: 'assets/images/location-48x48.png',
      detailsParagraphs: [
        'Application that allows to mark places in the map with the name you own, and navigate over then.',
        'Developed in angular with material design and firebase firestore.'
      ],
      url: 'https://ng-mapbox.web.app/map'
    },
    {
      name: 'Email sender API with SendGrid',
      imgURL: 'assets/images/baseline_email_black_48.png',
      detailsParagraphs: [
        'Application that allows to sen emails using the SendGrid API.',
        'Developed in Node.js.'
      ],
      url: 'https://github.com/Bradoqguido/emailSenderAPI'
    },
    {
      name: 'Point Register Application',
      imgURL: 'assets/images/baseline_access_alarm_black_48.png',
      detailsParagraphs: [
        'Application that allows to resgistre the time what you work.',
        'Developed in C#.'
      ],
      url: 'https://github.com/Bradoqguido/MarcadorDePonto'
    },
  ];

  ngOnInit() {
  }

}
