import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the SearchDoctors page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-search-doctors',
	templateUrl: 'search-doctors.html',
})
export class SearchDoctors {
	searchQuery: string = "";
	doctors: Array<object> = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.getAllDoctors();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchDoctors');
	}

	getAllDoctors() {
		var link = "http://api.moadii.com/search/GetDoctors?lang=en";
		var headers = new Headers({'Content-Type': 'application/json'});
		var options = new RequestOptions({headers: headers});

		var data = "";

		this.http.get(link, options)
			.map(res=> res.json())
				.subscribe(
					(data)=> {
						if (data.Success == true) {
							this.doctors = data.Data;
						}
						console.log(data);
					},

					(err) => {

					}
				);

	}

	getSearchedDoctors(event: any) {
		var query = event.target.value;
		console.log(query);

		if(this.searchQuery == '') {
            query = "";
        }

	}

	clearSearch(event: any) {		
		console.log(event);
	}

}
