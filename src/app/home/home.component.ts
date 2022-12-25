import { Component, OnInit } from '@angular/core';
import { Consultation } from '../models/consultation.model';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   ConsultationData : Consultation[] = [] ;
   constructor (private consultationService : ConsultationService){
   }
    ngOnInit(): void {
      this.consultationService.getConsultations().subscribe(
        (data) => {
          this.ConsultationData = data ;
        }
      ) ;
    }
}
