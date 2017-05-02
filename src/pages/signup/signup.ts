import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';

import { Platform, ActionSheetController } from 'ionic-angular';

// import { Camera, File, Transfer, FileChooser } from 'ionic-native';

import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string} = {};
  submitted = false;
  gender: any = "m";
  selectOptions: any;

  constructor(public navCtrl: NavController, public userData: UserData, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public http: Http) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }

  openMenuGetImage() {
  //   let actionSheet = this.actionsheetCtrl.create({
  //     title: "Upload Image",
  //     buttons: [
  //     {
  //       text: "Gallery",
  //       icon: !this.platform.is('ios') ? 'images' : null,
  //       handler: ()=> {
  //         let options = {
  //           destinationType: Camera.destinationType.FILE_URI,
  //           sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  //         };
  //         Camera.getPicture(options).then(
  //           (imageData: any) => {
  //             this.uploadImageToServer(imageData);
  //           },
  //           (err: any) => {
  //             //Handle Error
  //           });
  //       }
  //     },
  //     {
  //       text: "Camera",
  //       icon: !this.platform.is('ios') ? 'camera' : null,

  //       handler: () => {
  //         let options = {
  //           destinationType: Camera.DestinationType.FILE_URI,
  //           sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  //         };

  //         Camera.getPicture(options).then(
  //           (imageData: any) => {
  //              this.uploadImageToServer(imageData);

  //           },
  //           (err: any) => {
  //             //Handle Error
  //           });
  //       }
  //     },

  //     {
  //       text: "Cancel",
  //       role: 'cancel',
  //       icon: !this.platform.is('ios') ? 'close' : null,
  //       handler: () => {
  //         console.log('Cancel Cicked');
  //       }
  //     }

        
  //     ]  //Button Array Closed
  //   });
  //   actionSheet.present();
  }

  uploadImageToServer(filepath: any) {

       
       
  //      const fileTransfer = new Transfer();
  //      var options: any;
  //      options = {
  //          fileKey: 'file',
  //          fileName: /*Select the filename*/'abc',
  //          mimeType: 'image/jpeg',
  //          headers: {}
  //      };

  //      fileTransfer.upload(filepath, "https://knockapp.eytech.co/photoupload.php", options)
  //          .then((data: any) => {
  //              //console.log(data);
               
  //              /*this.userpic="https://knockapp.eytech.co/img/"+this.signupData.userid+".jpg";
  //              console.log("userpic is" + this.signupData.userpic);
  //              setTimeout(function(){this.navCtrl.setRoot(ProfilePage, {signup_data: this.signupData});},1000);*/
               
  //          }, (err: any) => {
  //              //console.log(err);
  //          });
   }
}
