import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ObserverService } from '../../core/observer.service';
import { GymService } from '../../services/gym.service';
@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.page.html',
  styleUrls: ['./add-gym.page.scss']
})
export class AddGymPage implements OnInit {
  baseUrl = 'http://mobile.khabarrazmavar.ir';
  src = [];
  newObj = [];
  features = [];
  fileToUpload: File = null;
  imgArray: any[] = [];
  docs: string;
  formData: FormGroup;
  location: any[] = [];


  showLoader = false;
  constructor(private gymeService: GymService, private formBuilder: FormBuilder, public toasr: ToastController, private observer: ObserverService) {
    this.formData = this.formBuilder.group({
      title: new FormControl(
        undefined,
        Validators.required
      ),
      address: new FormControl(
        undefined,
        Validators.required
      ),
      shortDescription: new FormControl(
        undefined,
        Validators.required
      ),
      titleDes: new FormControl(
        undefined,
        Validators.required
      ),
      description: new FormControl(
        undefined,
        Validators.required
      ),
      image: new FormControl(),
      documents: new FormControl(),
      facilities: new FormControl(),
      location: new FormControl()
    })

  }
  handleFileInput(files: FileList) {
    this.showLoader = true;
    this.fileToUpload = files.item(0);

    this.gymeService.fileUpload(this.fileToUpload).subscribe(
      r => {
        if (r['result']) {
          this.imgArray.push(r['src']);
          this.formData.value['image'] = this.imgArray;
          this.src.push(this.baseUrl + r['src']);
          this.showLoader = false;
        } else {
          setTimeout(() => {
            this.showLoader = true
          }, 5000);
          console.log('error');
        }
      }
    );
  }
  handleDocsInput(files: FileList) {
    this.fileToUpload = files.item(0);

    this.gymeService.fileUpload(this.fileToUpload).subscribe(
      r => {
        this.docs = r['src'];
        this.formData.value['documents'] = this.docs;
      }
    );
  }
  addfuture() {
    this.features.push({})
    this.newObj.push({
      title: this.formData.value['titleDes'],
      value: this.formData.value['shortDescription']
    });
  }
  removefuture() {
    this.features.pop();
  }

  onSubmit() {
    console.log('line 88');

    this.formData.value['location'] = this.location;
    this.newObj.push({
      title: this.formData.value['titleDes'],
      value: this.formData.value['shortDescription']
    });
    this.newObj.shift();

    this.formData.value['facilities'] = this.newObj;
    this.formData.value['image'] = this.imgArray;

    this.gymeService.addGym(this.formData.value).subscribe(
      r => {

        if (r['result'] === true) {
          this.toasr.create({
            message: r['message'],
            color: 'success',
            position: 'bottom',
            duration: 4000
          }).then(toast => {
            toast.present();
          });
        } else {
          this.toasr.create({
            message: r['message'],

            color: 'danger',
            position: 'bottom',
            duration: 4000
          })
            .then(toast => {
              toast.present();
            });
        }
      }
    );
  }
  ngOnInit() {
    this.observer.currentLocation.subscribe(
      r => {
        this.location = r;
      }
    );
  }

}
