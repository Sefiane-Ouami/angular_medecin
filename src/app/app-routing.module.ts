import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'ajouterPatient', component: AddpatientComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
