import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.page.html',
  styleUrls: ['./family-list.page.scss'],
})
export class FamilyListPage implements OnInit {

  families: any;

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // หลังจากเข้าหน้า home ให้โปรแกรมดึงค่าจาก storage ชื่อ MedList
    this.storage.get('families').then(val => {
      console.log(val);
      this.families = val;
    });
  }

  onClickAdd() {
    this.router.navigate(['/add-family']);
  }

  onClickNotiList(familyDetail, index) {
    familyDetail.familyIndex = index;
    this.router.navigate(['/notification-list', { familyDetail: JSON.stringify(familyDetail) }]);
  }

}
