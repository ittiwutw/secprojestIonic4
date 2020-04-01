import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.page.html',
  styleUrls: ['./family-list.page.scss'],
})
export class FamilyListPage implements OnInit {

  families = [];

  constructor(
    private storage: Storage,
    private router: Router,
    private localNotifications: LocalNotifications
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

  onClickDoctorList(familyDetail, index) {
    familyDetail.familyIndex = index;
    this.router.navigate(['/doctor-list', { familyDetail: JSON.stringify(familyDetail) }]);
  }

  onClickRemove(index) {
    this.families.splice(index, 1);
    this.storage.remove('families').then(removed => {
      this.storage.set('families', this.families).then(val => {
        console.log(val);
        const medList = [];
        val.forEach(family => {
          const famMedList = family.noticeMed;
          famMedList.forEach(med => {
            medList.push(med);
          });
        });
        console.log(medList);

        this.setNotice(medList);

      });
    });

  }

  setNotice(medList) {

    this.localNotifications.cancelAll().then(() => {
      this.localNotifications.clearAll().then(() => {
        // set การแจ้งเตือน โดยดึงค่าที่ต้องการแจ้งเตือนทั้งหมดมาวน loop
        const noticeList = [];
        let idIndex = 1;

        // วน loop
        medList.forEach(notice => {

          // แปลงเวลาที่ user เลือก เอาเฉพาะ ชั่วโมงกับนาที
          const selectDate = new Date(notice.time);
          console.log(selectDate.getHours());
          console.log(selectDate.getMinutes());
          let selectHr = selectDate.getHours();
          let selectMin = selectDate.getMinutes();

          if (notice.medicineType === 'ก่อนอาหาร') {
            console.log('before');
            selectMin = selectMin - 15;
            console.log('- 15: ' + selectMin);
            if (selectMin < 0) {
              selectHr = selectHr - 1;
              selectMin = selectMin + 60;
              console.log('<0 15: ' + selectMin);
            }
          } else if (notice.medicineType === 'หลังอาหาร') {
            console.log('after');
            selectMin = selectMin + 15;
            console.log('- 15: ' + selectMin);
            if (selectMin > 59) {
              selectHr = selectHr + 1;
              const minLeft = selectMin - 60;
              if (minLeft === 0) {
                selectMin = 0;
              } else {
                selectMin = minLeft;
              }
              console.log('>60 timeLeft: ' + selectMin);
            }
          }


          // set parameter สำหรับแจ้งเตือน notification ตาม structure นี้
          const noticeParam = {
            id: idIndex,
            title: notice.Mname + ' ' + notice.medicine + ' ' + notice.description + ' ' + notice.medicineType + ' ' + notice.amt
              + ' ' + notice.unit,
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

  onClickUpdate(family, index) {
    this.router.navigate(['/add-family', { familyDetail: JSON.stringify(family), familyIndex: index }]);
  }

}
