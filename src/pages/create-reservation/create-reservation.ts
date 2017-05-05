import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the CreateReservation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservation {
	doctor: any;
	fromDate: String = new Date().toISOString();
	toDate: String = new Date().toISOString();
	time: any;

	drAvailabilityData: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {
		this.doctor = navParams.get('doctor');
		


	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateReservation');
	}


	book() {
		if (this.fromDate > this.toDate) {
			let alert = this.alertCtrl.create({
				title: "Error!",
				subTitle: "From Date must be less than To Data.",
				buttons: ['Ok']
			});
			alert.present();
		} else {
			console.log("from"+ this.fromDate);
			console.log("to"+ this.toDate);
			console.log("time"+ this.time);
			this.checkDoctorAvailability(this.fromDate, this.toDate);
		}
	}

	checkDoctorAvailability(fdate: any, tdate: any) {
		var link = "http://api.moadii.com/search/GetDoctorAvailableDates?lang=en&";
		var headers = new Headers({'Content-Type': 'application/json'});
		var options = new RequestOptions({headers: headers});

		var data = "doctorId=44&datefrom="+fdate+"&dateto="+tdate;

		this.http.get(link+data, options)
			.map(res=> res.json())
				.subscribe((data)=> {
					this.drAvailabilityData = data;
					this.showAvailableTime(this.drAvailabilityData);
					console.log(data);
				});
	}

	showAvailableTime(data: any) {
		let alert = this.alertCtrl.create();
		alert.setTitle("Choose the Timing Slot ");
		for (var i = 0; i < data.Data.length; i++) {
			var slots = data.Data[i].TimeFrom +" - "+ data.Data[i].TimeTo;
			alert.addInput({type: 'radio', label: slots, value: '1'});
		}
		alert.addButton('Cancel');
		alert.addButton({
			text: 'OK',
			handler: (data: any) => {
				console.log(data);
			}
		});

		alert.present();
	}
}
