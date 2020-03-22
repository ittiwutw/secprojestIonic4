import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.page.html',
  styleUrls: ['./add-family.page.scss'],
})
export class AddFamilyPage implements OnInit {

  families = [];

  familyData = {
    name: '',
    birthDate: '',
    symptoms: '',
    drugAllergy: '',
    blood: '',
    weight: '',
    height: '',
    noticeMed: []
  };

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickSave() {
    this.storage.get('families').then(val => {
      let newFamily = [];
      if (val) {
        newFamily = val;
      }

      newFamily.push(this.familyData);

      this.storage.remove('families').then(removed => {
        this.storage.set('families', newFamily).then(saved => {
          this.router.navigate(['/family-list']);
        });
      });
    });
  }

}
