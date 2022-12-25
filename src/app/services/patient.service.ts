import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalInfo } from '../models/medical-info.model';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientDataApi : string ;
  patDataApi : string ;
  addpatientDataApi : string ;
  addMedicalInfo : string ;
  constructor(private http : HttpClient) { 
    this.patientDataApi = 'http://127.0.0.1:8080/getmedicalinfo' ;
    this.patDataApi = 'http://127.0.0.1:8080/patient?id=2' ;
    this.addpatientDataApi = 'http://127.0.0.1:8080/addpatient' ;
    this.addMedicalInfo = 'http://127.0.0.1:8080/addMedicalInfo' ;

  }


  public addPatient(patient : Patient): Observable<any> {
    return this.http.post<any>( this.addpatientDataApi , patient ) ;
  }

  public addnewMedicalInfo(MedicalInfo : MedicalInfo): Observable<any> {
    return this.http.post<any>( this.addMedicalInfo , MedicalInfo ) ;
  }

  public getPatientAll(): Observable<any> {
    return this.http.get<any>(this.patientDataApi )  ;
  }

  public getPatient(): Observable<any> {
    return this.http.get<any>(this.patientDataApi )  ;
  }


}
