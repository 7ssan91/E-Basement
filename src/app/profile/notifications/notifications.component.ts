import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notification = [
    {
      id: 1,
      imgurl: '../../assets/img/logo.png',
      from: 'ahmed',
      content: 'content of notfifcation  ....'
    },
    {
      id: 1,
      imgurl: '../../assets/img/logo.png',
      from: 'hayat',
      content: 'content of notfifcation content of notfifcation content of notfifcation content of notfifcation  ....'
    },
    {
      id: 1,
      imgurl: '../../assets/img/logo.png',
      from: 'njjar',
      content: 'content of notfifcation  ....'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
