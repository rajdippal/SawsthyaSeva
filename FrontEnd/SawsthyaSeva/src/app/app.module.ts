import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointmentsComponent } from './doctor-component/doctor-appointments/doctor-appointments.component';
import { DoctorMakePrescriptionComponent } from './doctor-component/doctor-make-prescription/doctor-make-prescription.component';
import { DoctorPatientDetailsComponent } from './doctor-component/doctor-patient-details/doctor-patient-details.component';
import { DoctorProfileComponent } from './doctor-component/doctor-profile/doctor-profile.component';
import { DoctorSearchPatientComponent } from './doctor-component/doctor-search-patient/doctor-search-patient.component';
import { DoctorViewPrescriptionComponent } from './doctor-component/doctor-view-prescription/doctor-view-prescription.component';
import { ReceptionistAddPatientComponent } from './receptionist-component/receptionist-add-patient/receptionist-add-patient.component';
import { ReceptionistAppointmentsComponent } from './receptionist-component/receptionist-appointments/receptionist-appointments.component';
import { ReceptionistPrescriptionComponent } from './receptionist-component/receptionist-prescription/receptionist-prescription.component';
import { ReceptionistProfileComponent } from './receptionist-component/receptionist-profile/receptionist-profile.component';
import { ReceptionistSearchDoctorComponent } from './receptionist-component/receptionist-search-doctor/receptionist-search-doctor.component';
import { ReceptionistSearchPrescriptionComponent } from './receptionist-component/receptionist-search-prescription/receptionist-search-prescription.component';
import { ReceptionistTakeAppointmentComponent } from './receptionist-component/receptionist-take-appointment/receptionist-take-appointment.component';
import { AdminAllDoctorsComponent } from './admin-component/admin-all-doctors/admin-all-doctors.component';
import { AdminAllReceptionistsComponent } from './admin-component/admin-all-receptionists/admin-all-receptionists.component';
import { AdminAddDoctorComponent } from './admin-component/admin-add-doctor/admin-add-doctor.component';
import { AdminAddReceptionistComponent } from './admin-component/admin-add-receptionist/admin-add-receptionist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddIpdComponent } from './receptionist-component/add-ipd/add-ipd.component';
import { ViewIpdComponent } from './receptionist-component/view-ipd/view-ipd.component';
import { ViewDoctorIpdComponent } from './doctor-component/view-doctor-ipd/view-doctor-ipd.component';
import { CheckOutIpdComponent } from './doctor-component/check-out-ipd/check-out-ipd.component';
import { IpdHistoryComponent } from './receptionist-component/ipd-history/ipd-history.component';

const routes : Routes = [
  {path: '', component: LoginComponent},
  {path: 'doctor/appointments', component: DoctorAppointmentsComponent},
  {path: 'doctor/prescription', component: DoctorMakePrescriptionComponent},
  {path: 'doctor/patient-details', component: DoctorPatientDetailsComponent},
  {path: 'doctor/profile', component: DoctorProfileComponent},
  {path: 'doctor/search-patient', component: DoctorSearchPatientComponent},
  {path: 'doctor/view-prescription', component: DoctorViewPrescriptionComponent},
  {path: 'receptionist/profile', component: ReceptionistProfileComponent},
  {path: 'receptionist/add-patient', component: ReceptionistAddPatientComponent},
  {path: 'receptionist/search-doctor', component: ReceptionistSearchDoctorComponent},
  {path: 'receptionist/appointments', component: ReceptionistAppointmentsComponent},
  {path: 'receptionist/take-appointment', component: ReceptionistTakeAppointmentComponent},
  {path: 'receptionist/search-prescription', component: ReceptionistSearchPrescriptionComponent},
  {path: 'receptionist/prescription', component: ReceptionistPrescriptionComponent},
  {path: 'admin/all-doctors', component: AdminAllDoctorsComponent},
  {path: 'admin/all-receptionists', component: AdminAllReceptionistsComponent},
  {path: 'admin/add-doctor', component: AdminAddDoctorComponent},
  {path: 'admin/add-receptionist', component: AdminAddReceptionistComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'receptionist/add-ipd', component: AddIpdComponent},
  {path: 'receptionist/view-ipd', component: ViewIpdComponent},
  {path: 'doctor/ipds', component: ViewDoctorIpdComponent},
  {path: 'doctor/checkout-ipd', component: CheckOutIpdComponent},
  {path: 'receptionist/ipd-history', component: IpdHistoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorAppointmentsComponent,
    DoctorMakePrescriptionComponent,
    DoctorPatientDetailsComponent,
    DoctorProfileComponent,
    DoctorSearchPatientComponent,
    DoctorViewPrescriptionComponent,
    ReceptionistAddPatientComponent,
    ReceptionistAppointmentsComponent,
    ReceptionistPrescriptionComponent,
    ReceptionistProfileComponent,
    ReceptionistSearchDoctorComponent,
    ReceptionistSearchPrescriptionComponent,
    ReceptionistTakeAppointmentComponent,
    AdminAllDoctorsComponent,
    AdminAllReceptionistsComponent,
    AdminAddDoctorComponent,
    AdminAddReceptionistComponent,
    AboutUsComponent,
    AddIpdComponent,
    ViewIpdComponent,
    ViewDoctorIpdComponent,
    CheckOutIpdComponent,
    IpdHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
