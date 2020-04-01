import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {

  doctorList = [];
  familyDetail: any;

  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localNotifications: LocalNotifications
  ) {
    this.activatedRoute.params.subscribe(param => {
      this.familyDetail = JSON.parse(param.familyDetail);
      this.doctorList = this.familyDetail.noticeDoctor;

      console.log(this.familyDetail);
    });

    this.localNotifications.getAllScheduled();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // หลังจากเข้าหน้า home ให้โปรแกรมดึงค่าจาก storage ชื่อ DoctorList
    // this.storage.get('DoctorList').then(val => {
    //   console.log(val);
    //   this.doctorList = val;
    // });
  }

  onClickAdd() {
    this.router.navigate(['/add-doctor', { familyIndex: this.familyDetail.familyIndex }]);
  }

  removeDoctor(index) {

    // ลบข้อมูลและ set ไปที่ storage อีกครั้ง โดยลบของเก่าและ set ใหม่
    this.doctorList.splice(index, 1);

    this.familyDetail.noticeDoctor = this.doctorList;

    this.storage.get('families').then(families => {
      let oldFamilies = [];
      oldFamilies = families;
      oldFamilies.splice(this.familyDetail.familyIndex, 1);
      oldFamilies.splice(this.familyDetail.familyIndex, 0, this.familyDetail);

      this.storage.remove('families').then(removed => {
        this.storage.set('families', oldFamilies).then(saved => {
          console.log(saved);
          alert('ลบข้อมูลสำเร็จ');
          this.setNotice(this.familyDetail.noticeDoctor);
        });
      });

    });
  }

  onClickUpdate(doctorIndex) {
    this.router.navigate(['/add-doctor', { familyIndex: this.familyDetail.familyIndex, doctorIndex }]);
  }

  setNotice(doctorList) {
    this.localNotifications.cancelAll().then(() => {
      this.localNotifications.clearAll().then(() => {
        // set การแจ้งเตือน โดยดึงค่าที่ต้องการแจ้งเตือนทั้งหมดมาวน loop
        const noticeList = [];
        let idIndex = 1;

        // วน loop
        doctorList.forEach(notice => {

          // แปลงเวลาที่ user เลือก เอาเฉพาะ ชั่วโมงกับนาที
          const selectDate = new Date(notice.time);
          console.log(selectDate.getHours());
          console.log(selectDate.getMinutes());
          let selectHr = selectDate.getHours();
          let selectMin = selectDate.getMinutes();

          if (notice.doctoricineType === 'ก่อนอาหาร') {
            selectMin = selectMin - 15;
            if (selectMin < 0) {
              selectHr = selectHr - 1;
              selectMin = selectHr + 60;
            }
          }


          // set parameter สำหรับแจ้งเตือน notification ตาม structure นี้
          const noticeParam = {
            id: idIndex,
            title: notice.Mname + ' ' + notice.doctoricine + ' ' + notice.description,
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
