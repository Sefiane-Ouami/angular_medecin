import { Patient } from "./patient.model";

export class Medecin extends Patient {
    override id: number ;
    specialite : string = '' ;
}
