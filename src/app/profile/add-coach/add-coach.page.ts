import { Component, OnInit } from '@angular/core';
import { CoachService } from 'src/app/services/coach.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ObserverService } from 'src/app/core/observer.service';
@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.page.html',
  styleUrls: ['./add-coach.page.scss']
})
export class AddCoachPage implements OnInit {
  baseUrl = 'http://mobile.khabarrazmavar.ir';
  src = [];
  newObj = [];
  features = [];
  name: string;
  address: string;
  fileToUpload: File = null;
  imgArray: any[] = [];
  docs: string;
  description: string;
  title: string;
  location: any[] = [];


  formData: FormGroup;
  constructor(private coachService: CoachService, private formBuilder: FormBuilder,
    public toasr: ToastController, private observer: ObserverService) {
    this.formData = this.formBuilder.group({
      name: new FormControl(
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
      title: new FormControl(
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

    this.fileToUpload = files.item(0);
    this.coachService.fileUpload(this.fileToUpload).subscribe(
      r => {
        if (r['result']) {
          console.log('asdf');
          
          this.imgArray.push(r['src']);
          this.formData.value['image'] = this.imgArray;

          this.src.push(this.baseUrl + r['src']);
        } else {
          console.log('error');
        }
      }
    );
  }
  handleDocsInput(files: FileList) {
    this.fileToUpload = files.item(0);

    this.coachService.fileUpload(this.fileToUpload).subscribe(
      r => {
        this.docs = r['src'];
        this.formData.value['documents'] = this.docs;
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
  addfuture() {
    this.features.push({})
    this.newObj.push({
      title: this.formData.value['title'],
      value: this.formData.value['shortDescription']
    });
  }
  removefuture() {
    this.features.pop();
  }

  onSubmit() {
    this.formData.value['location'] = this.location;
    this.newObj.push({
      title: this.formData.value['title'],
      value: this.formData.value['shortDescription']
    });
    this.newObj.shift();

    this.formData.value['facilities'] = this.newObj;
    this.formData.value['image'] = this.imgArray;

    this.coachService.addCoach(this.formData.value).subscribe(
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
}
