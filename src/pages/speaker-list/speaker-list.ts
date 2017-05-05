import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SessionDetailPage } from '../session-detail/session-detail';
import { Doctorsdetails } from '../doctorsdetails/doctorsdetails';

import { Http, Headers, RequestOptions } from '@angular/http';

import { Ionic2RatingModule } from 'ionic2-rating';

import { SearchDoctors } from '../search-doctors/search-doctors';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  // actionSheet: ActionSheet;
  reservations: Array<object> = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public config: Config,
    public http: Http
    // public inAppBrowser: InAppBrowser
  ) { }

  ionViewDidLoad() {
   this.getReservations();
  }

  getReservations() {
    var link = "http://api.moadii.com/account/GetUpcomingReservations?lang=en&userid=-1";
    var headers = new Headers({'Content-Type': 'application/json'});
    var options = new RequestOptions({headers: headers});

    var data = "";

    this.http.get(link, options)
      .map(res=> res.json())
        .subscribe(
          (data)=> {
            if (data.Success == true) {
              this.reservations = data.Data;
            }
            console.log(data);
          },

          (err) => {

          }
        );

  }

  goToDoctorsDetail(reservations: any) {
        console.log(reservations);
        this.navCtrl.push(Doctorsdetails, {reservations});
      }

  createNewReservation() {
    this.navCtrl.push(SearchDoctors);
  }

}
