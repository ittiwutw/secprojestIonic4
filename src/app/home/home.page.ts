import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  medList = [];

  constructor(
    private storage: Storage,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // หลังจากเข้าหน้า home ให้โปรแกรมดึงค่าจาก storage ชื่อ MedList
    this.storage.get('MedList').then(val => {
      console.log(val);
      this.medList = val;
    });
  }

  removeMed(index) {

    // ลบข้อมูลและ set ไปที่ storage อีกครั้ง โดยลบของเก่าและ set ใหม่
    this.medList.splice(index, 1);
    this.storage.remove('MedList').then(() => {
      this.storage.set('MedList', this.medList);
    });

    // clear การแจ้งเตือนเก่า และ set ใหม่
    this.localNotifications.clearAll().then(() => {
      const noticeList = [];
      let idIndex = 1;
      this.medList.forEach(notice => {
        const selectDate = new Date(notice.time);
        console.log(selectDate.getHours());
        console.log(selectDate.getMinutes());
        const selectHr = selectDate.getHours();
        const selectMin = selectDate.getMinutes();

        const noticeParam = {
          id: idIndex,
          title: notice.Mname + ' ' + notice.description,
          trigger: {
            every: {
              hour: selectHr,
              minute: selectMin
            }
          }
        };

        noticeList.push(noticeParam);
        idIndex++;
      });

      console.log(noticeList);

      this.localNotifications.schedule(noticeList);
    });
  }

}
