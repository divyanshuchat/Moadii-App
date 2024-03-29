import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, LoadingController } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';

import { SessionDetailPage } from '../session-detail/session-detail';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

import { SearchDoctors } from '../search-doctors/search-doctors';



@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public user: UserData,
  ) {}

  ionViewDidLoad() {

  }

  
  myreservations() {
    // go to the my reservations page
    this.navCtrl.parent.select(1);
  }


  

    goToSearchHospitalsPage() {

    }

    goToSearchDispensariesPage() {

    }

    goToSearchDoctorsPage() {
        this.navCtrl.parent.select(2);
    }

    goToSearchPrivateClinicsPage() {

    }
}
