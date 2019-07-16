import { Component, OnInit} from '@angular/core';
import { DataServiceService } from './providers/data-service.service';
import * as data from '../../backend/data.json';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'biz2credit';
  private userData: User[] = data.default;
  private filteredUserData: User[] = []

  dublinLat = 53.339428;
  dublinLon = -6.257664;

  constructor(private dataServiceService : DataServiceService) {
   }

  ngOnInit(){
  	this.userData.forEach(data => {
  		data.distance = this.distance(this.dublinLat, this.dublinLon, data.latitude, data.longitude)
  		console.log(data)
  	})

  	this.userData.forEach(data => {
  		if(parseInt(data.distance.split('km')[0]) <= 100){
  			this.filteredUserData.push(data);
  		}
  	})
	}

	distance(lat1,lon1,lat2,lon2) {
		const R = 6371; // km (change this constant to get miles)
		var dLat = (lat2-lat1) * Math.PI / 180; // to radians
		var dLon = (lon2-lon1) * Math.PI / 180; // to radians
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		if (d>1) return Math.round(d)+"km";
		else if (d<=1) return Math.round(d*1000)+"m";
		return d;
	}
}
