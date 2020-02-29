import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.page.html',
  styleUrls: ['./add-detail.page.scss'],
})
export class AddDetailPage implements OnInit {

  postdata = {
    medicine: '',
    Mname: '',
    medicineType: '',
    description: '',
    time: ''
  };
  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickSave() {
    this.storage.get('MedList').then(val => {
      let newMed = [];

      if (val) {
        newMed = val;
      }
      newMed.push(this.postdata);

      this.storage.remove('MedList').then(() => {
        this.storage.set('MedList', newMed);
        alert('Completed!!');
        this.router.navigate(['/home']);
      });

    });

  }

}
