import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TradingJournal-WEB';
  imagesArray: string[];
  randomImage: string;

  constructor() {
    this.imagesArray = ['pexels-photo-908284', 'pexels-photo-187041', 'pexels-photo-860379', 'pexels-photo-908288', 'pexels-photo-908292', 'pexels-photo-1509428', 'pexels-photo-241544'];
    this.randomImage = '../assets/images/backgroundImages/'+this.imagesArray[Math.floor(Math.random()*(this.imagesArray.length))]+'.jpeg';
    console.log(this.randomImage, "random");
  }

  ngOnInit() {
  }
  
}
