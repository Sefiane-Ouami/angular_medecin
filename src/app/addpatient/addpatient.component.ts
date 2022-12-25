import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalInfo } from '../models/medical-info.model';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  patient = new Patient();
  patientT = new Patient();
  medicalInfo = new MedicalInfo();
  constructor(private patientService: PatientService) {
    
  }
  onSubmit(f: NgForm) {
   // this.consultation.id = '2' ;
    this.patient.nom = f.value['nom'] ;
    this.patient.prenom = f.value['prenom'] ;
    this.patient.email = f.value['email'] ;
    this.patient.telephone = f.value['telephone'] ;
    this.patient.date_naissance = f.value['date_naissance'] ;

    this.medicalInfo.poids = f.value['poids'] ;
    this.medicalInfo.saturation = f.value['saturation'] ;
    this.medicalInfo.temperature = f.value['temperature'] ;
    this.medicalInfo.taille = f.value['taille'] ;
    this.medicalInfo.battementcoeur = f.value['battementcoeur'] ;
    this.patientT.id = 6 ;
    this.medicalInfo.patient = this.patientT ;



    this.patientService.addPatient(this.patient).subscribe();

    this.patientService.addnewMedicalInfo(this.medicalInfo).subscribe();


  }

}
