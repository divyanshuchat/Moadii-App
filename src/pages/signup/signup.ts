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
  signup: {username?: string, password?: string} = {};
  submitted = false;
  gender: any = "m";
  selectOptions: any;

  constructor(public navCtrl: NavController, public userData: UserData, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public http: Http, private file: File, private fileChooser: FileChooser, private transfer: Transfer, private camera: Camera) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
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

       fileTransfer.upload(filepath, "https://knockapp.eytech.co/photoupload.php", options)
           .then((data: any) => {
               //console.log(data);
               
               /*this.userpic="https://knockapp.eytech.co/img/"+this.signupData.userid+".jpg";
               console.log("userpic is" + this.signupData.userpic);
               setTimeout(function(){this.navCtrl.setRoot(ProfilePage, {signup_data: this.signupData});},1000);*/
               
           }, (err: any) => {
               //console.log(err);
           });
   }
}
