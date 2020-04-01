import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.page.html',
  styleUrls: ['./add-family.page.scss'],
})
export class AddFamilyPage implements OnInit {

  families = [];

  familyData = {
    img: '',
    name: '',
    birthDate: '',
    symptoms: '',
    drugAllergy: '',
    blood: '',
    weight: '',
    height: '',
    noticeMed: [],
    noticeDoctor: []
  };

  familyIndex: any;
  isUpdate = false;

  constructor(
    private storage: Storage,
    private router: Router,
    private camera: Camera,
    private domSanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private localNotifications: LocalNotifications
  ) {
    this.activatedRoute.params.subscribe(param => {
      if (param.familyIndex) {

        this.familyIndex = param.familyIndex;
        console.log(this.familyIndex);
        this.getFamilyDetail();
        this.isUpdate = true;
      }
    });
  }

  getFamilyDetail() {
    this.storage.get('families').then(val => {
      this.familyData = val[this.familyIndex];
      console.log(this.familyData);
    });
  }

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

  pickImage() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);

      this.familyData.img = base64Image;

    }, (err) => {
      // Handle error
    });
  }

  onClickUpdate() {
    console.log(this.familyData);
    this.storage.get('families').then(val => {
      let newFamily = [];

      newFamily = val;
      newFamily.splice(this.familyIndex, 1);
      newFamily.splice(this.familyIndex, 0, this.familyData);

      this.storage.remove('families').then(removed => {
        this.storage.set('families', newFamily).then(saved => {
          console.log(val);
          const medList = [];
          newFamily.forEach(family => {
            const famMedList = family.noticeMed;
            famMedList.forEach(med => {
              medList.push(med);
            });
          });
          console.log(medList);

          this.setNotice(medList);
        });
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

          console.log(notice.medicineType);
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

        alert('บันทึกข้อมูลสำเร็จ');
        this.router.navigate(['/family-list']);

      });
    });

  }
}
