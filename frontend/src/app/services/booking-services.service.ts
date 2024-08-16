import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../model/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServicesService {
  urlbase:string="";

  constructor( private http : HttpClient) { }

   //Servicio Crear booking
   postLocal(booking: Booking): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),

      params: new HttpParams()
    }

    let body = JSON.stringify(booking); // Serializa el JSON
    
    return this.http.post(this.urlbase + "", body, httpOption);
  }

}
