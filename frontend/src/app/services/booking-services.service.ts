import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/BookingModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServicesService {

  urlbase:string="http://127.0.0.1:8000/api/Booking";

  constructor( private http : HttpClient) {}

   //Servicio Crear booking
   postBooking(booking: Object): Observable<any> {
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
