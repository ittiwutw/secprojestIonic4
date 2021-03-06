import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.page.html',
  styleUrls: ['./add-detail.page.scss'],
})
export class AddDetailPage implements OnInit {

  postdata = {
    img: '',
    medicine: '',
    Mname: '',
    medicineType: '',
    description: '',
    time: '',
    unit: '',
    amt: ''
  };

  noticeList: any;

  familyIndex: any;
  familyDetail: any;
  medIndex: any;

  isUpdate = false;

  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localNotifications: LocalNotifications,
    private camera: Camera,
    private domSanitizer: DomSanitizer,
  ) {

    this.localNotifications.requestPermission();

  }

  ionViewWillEnter() {
    this.clearData();
    this.activatedRoute.params.subscribe(param => {
      this.familyIndex = param.familyIndex;

      console.log(this.familyIndex);

      if (param.medIndex) {
        this.medIndex = param.medIndex;
        this.getMedNoticeData(param.medIndex);
        this.isUpdate = true;
      }

      this.getFamilyData();
    });
  }

  ngOnInit() {
  }

  validate() {
    let isValidated = false;

    if (this.postdata.Mname !== '' && this.postdata.medicine !== '' && this.postdata.time !== '') {
      isValidated = true;
    }

    return isValidated;
  }

  clearData() {
    this.postdata.Mname = '';
    this.postdata.description = '';
    this.postdata.medicine = '';
    this.postdata.medicineType = '';
    this.postdata.time = '';
  }

  getFamilyData() {
    this.storage.get('families').then(val => {
      this.familyDetail = val[this.familyIndex];
      this.postdata.Mname = this.familyDetail.name;
    });
  }

  getMedNoticeData(medNoticeIndex) {
    this.storage.get('families').then(val => {
      const familyDetail = val[this.familyIndex];
      this.postdata = familyDetail.noticeMed[medNoticeIndex];
    });
  }

  onSave() {
    if (this.validate()) {
      this.familyDetail.noticeMed.push(this.postdata);

      this.storage.get('families').then(families => {
        let oldFamilies = [];
        oldFamilies = families;
        oldFamilies.splice(this.familyIndex, 1);
        oldFamilies.splice(this.familyIndex, 0, this.familyDetail);

        this.storage.remove('families').then(removed => {
          this.storage.set('families', oldFamilies).then(saved => {
            console.log(saved);
            alert('บันทึกข้อมูลสำเร็จ');
            this.setNotice(this.familyDetail.noticeMed);
          });
        });

      });
    }

  }

  onUpdate() {
    if (this.validate()) {
      // this.familyDetail.noticeMed.push(this.postdata);
      const newMed = this.familyDetail.noticeMed;
      newMed.splice(this.medIndex, 1);
      newMed.splice(this.medIndex, 0, this.postdata);

      this.familyDetail.noticeMed = newMed;

      this.storage.get('families').then(families => {
        let oldFamilies = [];
        oldFamilies = families;
        oldFamilies.splice(this.familyIndex, 1);
        oldFamilies.splice(this.familyIndex, 0, this.familyDetail);

        this.storage.remove('families').then(removed => {
          this.storage.set('families', oldFamilies).then(saved => {
            console.log(saved);
            alert('บันทึกข้อมูลสำเร็จ');
            this.setNotice(this.familyDetail.noticeMed);
          });
        });

      });
    }

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

        this.router.navigate(['/family-list']);

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

      this.postdata.img = base64Image;

    }, (err) => {
      // Handle error
    });
  }

}
