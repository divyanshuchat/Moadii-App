import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Ionic2RatingModule } from 'ionic2-rating';
import { CreateReservation } from '../create-reservation/create-reservation';

/**
 * Generated class for the Doctorsdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doctorsdetails',
  templateUrl: 'doctorsdetails.html',
})
export class Doctorsdetails {
	doctor: any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.doctor = navParams.get('doctor');
  		console.log(this.doctor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Doctorsdetails');
  }

	goToReservations(doctor: any) {
		//console.log(doctor);
		this.navCtrl.push(CreateReservation, {doctor: doctor});

	}

}
