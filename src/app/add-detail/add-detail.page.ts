import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

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

  noticeList: any;
  constructor(
    private storage: Storage,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {

    this.localNotifications.requestPermission();

  }

  ngOnInit() {
  }

  onClickSave() {

    if (this.validate()) {
      // เก็บข้อมูลไว้ที่ storage โดยใช้ @ionic/storage
      // ตั้งชื่อตัวแปรไว้ชื่อ MedList
      this.storage.get('MedList').then(val => {
        let newMed = [];

        // เช็คว่าใน storage มีค่าไหม ถ้ามีให้ set ไปที่ newMed
        if (val) {
          newMed = val;
        }

        // push ค่าที่เพิ่มมาใหม่รวมของเก่า(ถ้ามี) ไปที่ newMed
        newMed.push(this.postdata);

        // ลบค่าเดิมในstorage MedList
        this.storage.remove('MedList').then(() => {

          // set ค่าใหม่ในstorage MedList
          this.storage.set('MedList', newMed);
          alert('Completed!!');

          // set การแจ้งเตือน โดยดึงค่าที่ต้องการแจ้งเตือนทั้งหมดมาวน loop
          const noticeList = [];
          let idIndex = 1;

          // วน loop
          newMed.forEach(notice => {

            // แปลงเวลาที่ user เลือก เอาเฉพาะ ชั่วโมงกับนาที
            const selectDate = new Date(notice.time);
            console.log(selectDate.getHours());
            console.log(selectDate.getMinutes());
            const selectHr = selectDate.getHours();
            const selectMin = selectDate.getMinutes();

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

          this.router.navigate(['/home']);
        });

      });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
    }

  }

  validate() {
    let isValidated = false;

    if (this.postdata.Mname !== '' && this.postdata.description !== '' && this.postdata.medicine !== ''
      && this.postdata.medicineType !== '' && this.postdata.time !== '') {
      isValidated = true;
    }

    return isValidated;
  }

}
