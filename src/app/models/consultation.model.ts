import { Medecin } from './medecin.model';
import { Patient } from './patient.model';
export class Consultation {
     id : number ;
     date : Date  ;
     note : string ;
     rapport :string ;
     status : string ;
     medecin = new Medecin() ;
     patient = new Patient()  ;
     file: string  ;
}
