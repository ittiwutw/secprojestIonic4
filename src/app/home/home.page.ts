import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  medList = [];

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('MedList').then(val => {
      console.log(val);
      this.medList = val;
    });
  }

  removeMed(index) {
    this.medList.splice(index, 1);
    this.storage.remove('MedList').then(() => {
      this.storage.set('MedList', this.medList);
    });
  }

}
