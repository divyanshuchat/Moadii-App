import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';

import { Platform, ActionSheetController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { File } from '@ionic-native/file';

import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

import { FileChooser } from '@ionic-native/file-chooser';

import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string, countryID?: string} = {};
  submitted = false;
  gender: any = "m";
  selectOptions: any;
  countries: Array<object> = [];
  governorates: Array<object> = [];
  cities: Array<object> = [];

  constructor(
            public navCtrl: NavController, 
            public userData: UserData,
            public platform: Platform, 
            public actionsheetCtrl: ActionSheetController,
            public http: Http,
            private file: File,
            private fileChooser: FileChooser,
            private transfer: Transfer,
            private camera: Camera
            ) {
                this.getCountry();

  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
        this.sendFormdataToServer(form.value);
       console.log(form.value);
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
    }
  }

    sendFormdataToServer(formdata: any) {

        var formdataCompiled =  "lang=en&FullName="+formdata.fullname+"&LoginName="+formdata.username+"&Email="+formdata.email+"&Password="+formdata.password+"&CountryID="+formdata.country+"&GovernorateID="+formdata.governorate+"&CityID="+formdata.city+"&MobileNo="+formdata.mobile+"&Gender="+formdata.gender;

        var link = "http://api.moadii.com/account/Register";
        var headers = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: headers});
   
        this.http.post(link, formdataCompiled, options)
            .map(res=>res.json())
                .subscribe((data)=>{console.log(data)}, (err)=>{console.log(err)});
    }

  openMenuGetImage() {
    let actionSheet = this.actionsheetCtrl.create({
      title: "Upload Image",
      buttons: [
      {
        text: "Gallery",
        icon: !this.platform.is('ios') ? 'images' : null,
        handler: ()=> {
          let options: CameraOptions = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.camera.getPicture(options).then(
            (imageData: any) => {
              this.uploadImageToServer(imageData);
            },
            (err: any) => {
              //Handle Error
            });
        }
      },
      {
        text: "Camera",
        icon: !this.platform.is('ios') ? 'camera' : null,

        handler: () => {
          let options: CameraOptions = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };

          this.camera.getPicture(options).then(
            (imageData: any) => {
               this.uploadImageToServer(imageData);

            },
            (err: any) => {
              //Handle Error
            });
        }
      },

      {
        text: "Cancel",
        role: 'cancel',
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel Cicked');
        }
      }

        
      ]  //Button Array Closed
    });
    actionSheet.present();
  }

  uploadImageToServer(filepath: any) {   
       
       const fileTransfer: TransferObject = this.transfer.create();
       var options: FileUploadOptions;
       options = {
           fileKey: 'file',
           fileName: /*Select the filename*/'abc',
           mimeType: 'image/jpeg',
           headers: {}
       };

       fileTransfer.upload(filepath, "www.url.com/user/<userid>.jpg", options)
           .then((data: any) => {
               //console.log(data);
               
               /*this.userpic="https://knockapp.eytech.co/img/"+this.signupData.userid+".jpg";
               console.log("userpic is" + this.signupData.userpic);
               setTimeout(function(){this.navCtrl.setRoot(ProfilePage, {signup_data: this.signupData});},1000);*/
               
           }, (err: any) => {
               //console.log(err);
           });
  }

    getCountry() {
        var link = "http://api.moadii.com/account/GetCountries?lang=en";
        var headers = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: headers});


        this.http.get(link, options)
            .map(res => res.json())
                .subscribe(
                    (data) => {
                        if(data.Success == true) {
                            this.countries = data.Data;
                            //console.log(this.countries);
                        }
                    },
                    (err) => {console.log(err)});
    }

    getGovernorate(event: any) {
        var countryID = event;
        var link = "http://api.moadii.com/account/GetGovOfCountry?lang=en&countryid="+ countryID;
        var headers = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: headers});

        this.http.get(link, options)
            .map(res => res.json())
                .subscribe(
                    (data) => {
                        if (data.Success == true) {
                            this.governorates = data.Data;
                        }
                        //console.log(data.Data);
                    },
                    (err) => { console.log(err)});
  
    }

    getCity(event: any) {
        var govID = event;
        var link = "http://api.moadii.com/account/GetCitiesOfGov?lang=en&GovID="+event;
        var headers = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: headers});

        this.http.get(link, options)
            .map(res => res.json())
                .subscribe(
                    (data)=>{
                        if (data.Success == true) {
                            this.cities = data.Data;

                        }
                        console.log(this.cities);
                    },
                    (err)=>{console.log(err)});


    }
}