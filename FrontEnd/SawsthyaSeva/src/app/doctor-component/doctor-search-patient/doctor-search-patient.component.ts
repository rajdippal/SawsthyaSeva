import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomPrescription } from 'src/app/model/custom-prescription';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { DoctorService } from 'src/app/service/doctor.service';
import { PatientService } from 'src/app/service/patient.service';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-doctor-search-patient',
  templateUrl: './doctor-search-patient.component.html',
  styleUrls: ['./doctor-search-patient.component.css']
})
export class DoctorSearchPatientComponent implements OnInit {

  prescriptions : CustomPrescription[] = [];
  name !: string;

  constructor(private presService : PrescriptionService, private route: Router, private doctorService : DoctorService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.presService.searchPrescription(this.name).subscribe(data =>{
      this.prescriptions = data;
    });
  }

  onClick(pres : CustomPrescription){
    this.presService.currentPrescription = pres;
    this.route.navigate(['/doctor/view-prescription']);
  }

  onClickPatient(patient : Patient){
    this.doctorService.viewPatient = patient;
    this.route.navigate(['/doctor/patient-details']);
  }

}
