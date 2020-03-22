import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
})
export class NotificationListPage implements OnInit {

  medList = [];
  familyDetail: any;

  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localNotifications: LocalNotifications
  ) {
    this.activatedRoute.params.subscribe(param => {
      this.familyDetail = JSON.parse(param.familyDetail);
      this.medList = this.familyDetail.noticeMed;

      console.log(this.familyDetail);
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // หลังจากเข้าหน้า home ให้โปรแกรมดึงค่าจาก storage ชื่อ MedList
    // this.storage.get('MedList').then(val => {
    //   console.log(val);
    //   this.medList = val;
    // });
  }

  onClickAdd() {
    this.router.navigate(['/add-detail', { familyIndex: this.familyDetail.familyIndex }]);
  }

  removeMed(index) {

    // ลบข้อมูลและ set ไปที่ storage อีกครั้ง โดยลบของเก่าและ set ใหม่
    this.medList.splice(index, 1);

    this.familyDetail.noticeMed = this.medList;

    this.storage.get('families').then(families => {
      let oldFamilies = [];
      oldFamilies = families;
      oldFamilies.splice(this.familyDetail.familyIndex, 1);
      oldFamilies.splice(this.familyDetail.familyIndex, 0, this.familyDetail);

      this.storage.remove('families').then(removed => {
        this.storage.set('families', oldFamilies).then(saved => {
          console.log(saved);
          alert('ลบข้อมูลสำเร็จ');
          this.setNotice(this.familyDetail.noticeMed);
        });
      });

    });
  }

  onClickUpdate(medIndex) {
    this.router.navigate(['/add-detail', { familyIndex: this.familyDetail.familyIndex, medIndex }]);
  }

  setNotice(noticeList) {
    this.localNotifications.cancelAll().then(() => {
      this.localNotifications.clearAll().then(() => {
        // set การแจ้งเตือน โดยดึงค่าที่ต้องการแจ้งเตือนทั้งหมดมาวน loop
        let idIndex = 1;

        // วน loop
        noticeList.forEach(notice => {

          // แปลงเวลาที่ user เลือก เอาเฉพาะ ชั่วโมงกับนาที
          const selectDate = new Date(notice.time);
          console.log(selectDate.getHours());
          console.log(selectDate.getMinutes());
          let selectHr = selectDate.getHours();
          let selectMin = selectDate.getMinutes();

          if (noticeList.medicineType === 'ก่อนอาหาร') {
            selectMin = selectMin - 15;
            if (selectMin < 0) {
              selectHr = selectHr - 1;
              selectMin = selectHr + 60;
            }
          }


          // set parameter สำหรับแจ้งเตือน notification ตาม structure นี้
          const noticeParam = {
            id: idIndex,
            title: notice.Mname + ' ' + notice.medicine + ' ' + notice.description,
            trigger: {
              every: {
                hour: selectHr,
                minute: selectMin
              }
            }
          };

          // add ข้อมูลที่ต้องการเตือนเข้า array ตัวแปรชื่อ noticeList
          noticeList.push(noticeParam);
          idIndex++;
        });

        console.log(noticeList);

        // ใช้ @ionic-native/local-notifications/ngx ในการแจ้งเตือน
        // set ค่าที่ต้องการแจ้งเตือน โดยอ้างอิงจากตัวแปร noticeList
        this.localNotifications.schedule(noticeList);
        // this.router.navigate(['/home']);

      });
    });

  }

}
