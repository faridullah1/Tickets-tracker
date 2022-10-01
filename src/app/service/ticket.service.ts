import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  /*
	Get tickets from assets folder
	You can replace "assets/data/tickets_data.json" with your server API when needed
  */
  getTicket(): Observable<any> {
	return this.http.get('assets/data/tickets_data.json');
  }
}
