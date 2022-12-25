import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Consultation } from '../models/consultation.model';
import { Medecin } from '../models/medecin.model';
import { Patient } from '../models/patient.model';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  file: File;

  note : string ;

  consultation = new Consultation() ;
  medecin = new Medecin() ;
  patient = new Patient() ;
  constructor( private consultationService: ConsultationService) {
   }

  ngOnInit() { }


  onFileChange(event) {
    this.file = event.target.files[0];
  }

  onSubmit(f: NgForm) {
    console.log(f.value['note']);
   // this.consultation.id = '2' ;
    this.consultation.note = f.value['note'] ;
     
    this.consultation.status = "consultation ajoutee" ;
    this.consultation.date = new Date() ;
    this.medecin.id = 2 ;
    this.patient.id = 1 ;
    this.consultation.medecin = this.medecin ; 
    this.consultation.patient = this.patient ;
    this.consultation.file = "E:\test file.pdf" ;

   // formData.append('file', this.file);

    this.consultationService.addConsultation(this.consultation).subscribe();
    // this.consultationService.save(this.consultation).subscribe(response => {
    //   console.log(response);
    // });


  }

}
