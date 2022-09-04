import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-patient-details',
  templateUrl: './doctor-patient-details.component.html',
  styleUrls: ['./doctor-patient-details.component.css']
})
export class DoctorPatientDetailsComponent implements OnInit {

  patient !: Patient;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.patient = this.doctorService.viewPatient;
  }

}
