import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.page.html',
  styleUrls: ['./add-doctor.page.scss'],
})
export class AddDoctorPage implements OnInit {

  postdata = {
    img: '',
    Mname: '',
    place: '',
    description: '',
    time: ''
  };

  noticeList: any;

  familyIndex: any;
  familyDetail: any;
  doctorIndex: any;

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

      if (param.doctorIndex) {
        this.doctorIndex = param.doctorIndex;
        this.getDoctorNoticeData(param.doctorIndex);
        this.isUpdate = true;
      }

      this.getFamilyData();
    });
  }

  ngOnInit() {
  }

  validate() {
    let isValidated = false;

    if (this.postdata.description !== '' && this.postdata.time !== '') {
      isValidated = true;
    }

    return isValidated;
  }

  clearData() {
    this.postdata.description = '';
    this.postdata.time = '';
    this.postdata.place = '';
  }

  getFamilyData() {
    this.storage.get('families').then(val => {
      this.familyDetail = val[this.familyIndex];
      this.postdata.Mname = this.familyDetail.name;
    });
  }

  getDoctorNoticeData(doctorNoticeIndex) {
    this.storage.get('families').then(val => {
      const familyDetail = val[this.familyIndex];
      this.postdata = familyDetail.noticeDoctor[doctorNoticeIndex];
    });
  }

  onSave() {
    if (this.validate()) {
      this.familyDetail.noticeDoctor.push(this.postdata);

      this.storage.get('families').then(families => {
        let oldFamilies = [];
        oldFamilies = families;
        oldFamilies.splice(this.familyIndex, 1);
        oldFamilies.splice(this.familyIndex, 0, this.familyDetail);

        this.storage.remove('families').then(removed => {
          this.storage.set('families', oldFamilies).then(saved => {
            console.log(saved);
            alert('บันทึกข้อมูลสำเร็จ');
            this.setNotice(this.familyDetail.noticeDoctor);
          });
        });

      });
    }

  }

  onUpdate() {
    if (this.validate()) {
      // this.familyDetail.noticeDoctor.push(this.postdata);
      const newDoctor = this.familyDetail.noticeDoctor;
      newDoctor.splice(this.doctorIndex, 1);
      newDoctor.splice(this.doctorIndex, 0, this.postdata);

      this.familyDetail.noticeDoctor = newDoctor;

      this.storage.get('families').then(families => {
        let oldFamilies = [];
        oldFamilies = families;
        oldFamilies.splice(this.familyIndex, 1);
        oldFamilies.splice(this.familyIndex, 0, this.familyDetail);

        this.storage.remove('families').then(removed => {
          this.storage.set('families', oldFamilies).then(saved => {
            console.log(saved);
            alert('บันทึกข้อมูลสำเร็จ');
            this.setNotice(this.familyDetail.noticeDoctor);
          });
        });

      });
    }

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
          const selectHr = selectDate.getHours();
          const selectMin = selectDate.getMinutes();

          // set parameter สำหรับแจ้งเตือน notification ตาม structure นี้
          const noticeParam = {
            id: +(new Date()),
            title: 'นัดหมอ: ' + notice.Mname + ' เวลา: ' + notice.time + ' รายละเอียด: ' + notice.description,
            trigger: {
              at: new Date(new Date(notice.time).getTime())
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
