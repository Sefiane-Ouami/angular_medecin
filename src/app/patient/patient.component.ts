import { Component } from '@angular/core';
import { MedicalInfo } from 'src/app/models/medical-info.model';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent{

  constructor(private patientService: PatientService) {}

  patientData : MedicalInfo[]  ;
  

   ngOnInit(): void {
    this.patientService.getPatientAll().subscribe(
    data => {
      this.patientData = data;
    }
  );

  }


}
