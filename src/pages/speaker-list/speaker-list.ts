import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

// import { Ionic2RatingModule } from 'ionic2-rating';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  actionSheet: ActionSheet;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public config: Config,
    // public inAppBrowser: InAppBrowser
  ) { }

  ionViewDidLoad() {
   
  }


}
