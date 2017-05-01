import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	about: {name?: string, email?: string, message?: string} = {};
  submitted = false;
  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public userData: UserData) {
   }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }


  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      
      this.navCtrl.push(TabsPage);
    }
  }

  
}
