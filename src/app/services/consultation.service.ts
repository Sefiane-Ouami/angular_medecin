import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation.model';

@Injectable({providedIn: 'root'})
export class ConsultationService {
  consultationDataApi : any ;

  constructor(private http : HttpClient) { 
    this. consultationDataApi = 'http://127.0.0.1:8080' ;
  }

  public addConsultation(consultation : Consultation): Observable<any> {
    return this.http.post<any>( this.consultationDataApi + "/addconsultation", consultation ) ;
  }

  public getConsultations(): Observable<any> {
    return this.http.get<any>(this. consultationDataApi +'/consultations' )  ;
  }
}