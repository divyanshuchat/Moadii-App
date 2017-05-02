import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
    selector: 'page-user',
    templateUrl: 'login.html'
})
export class LoginPage {
    login: {username?: string, password?: string} = {};
    submitted = false;

    constructor(public navCtrl: NavController, public userData: UserData, public http: Http) { }

    onLogin(form: NgForm) {
        this.submitted = true;

        if (form.valid) {
            console.log(form.value.username);
            this.verifyUserCredentials(form.value).then(
                success=> {console.log('Submitted')}
            ).catch(rejected=>{console.log('Rejected')});
            
         
            //this.userData.login(this.login.username);
            //this.navCtrl.push(TabsPage);
        }
    }

    verifyUserCredentials(formdata: any) {
        var link = "abc.test@test.com";
        var headers = new Headers({'Content-Type': 'applicaiton/json'});
        var options = new RequestOptions({headers: headers});
        var data = formdata;
        return new Promise((resolve, reject) => {
            this.http.post(link, data, options)
            .map(res=>res.json())
                .subscribe(
                    (data) => {
                        resolve(data);
                        console.log(data);
                        var success = true;
                    },
                    (err) => {
                        reject();
                        console.log(err);
                    }
                );
        });      


    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }
}
