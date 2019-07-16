import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //     console.log(data);
    // });
  }

	// getProduct(): Observable<any> {
	//    return of(Product).pipe(delay(1000));
	// }

 //  public getJSON(): Observable<any> {
 //    return this.http.get('../../../backend/data.json');
 //  }
}

