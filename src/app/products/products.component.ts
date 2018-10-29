import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = [
    {
      id: 1,
      imgurl: '../../assets/img/watch.png',
      title: 'house',
      creator: 'ahmed',
      country: 'Egypt',
      dat: '9-7-2018',
      desc: 'rolex watch ....'
    },
    {
      id: 2,
      imgurl: '../../assets/img/laptop.png',
      title: 'watch',
      creator: 'Ali',
      country: 'KSA',
      dat: '9-7-2018',
      desc: 'laptop mac ...'
    },
    {
      id: 1,
      imgurl: '../../assets/img/watch.png',
      title: 'house',
      creator: 'ahmed',
      country: 'Egypt',
      dat: '9-7-2018',
      desc: 'rolex watch ....'
    },
    {
      id: 2,
      imgurl: '../../assets/img/laptop.png',
      title: 'watch',
      creator: 'Ali',
      country: 'KSA',
      dat: '9-7-2018',
      desc: 'laptop mac ...'
    },
    {
      id: 1,
      imgurl: '../../assets/img/watch.png',
      title: 'house',
      creator: 'ahmed',
      country: 'Egypt',
      dat: '9-7-2018',
      desc: 'rolex watch ....'
    },
    {
      id: 2,
      imgurl: '../../assets/img/laptop.png',
      title: 'watch',
      creator: 'Ali',
      country: 'KSA',
      dat: '9-7-2018',
      desc: 'laptop mac ...'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
