import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { Prescription } from 'src/app/model/prescription';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-make-prescription',
  templateUrl: './doctor-make-prescription.component.html',
  styleUrls: ['./doctor-make-prescription.component.css']
})
export class DoctorMakePrescriptionComponent implements OnInit {

  msg = false;
  doctor !: Doctor;
  patient !: Patient;
  medicines !: string;
  tests !: string;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.doctor = this.doctorService.currentDoctor;
    this.patient = this.doctorService.prescribedPatient;
  }

  onSubmit(){
    let pres = new Prescription();

    pres.id = 898;
    pres.date = this.patient.registrationDate;
    pres.medicines = this.medicines;
    pres.tests = this.tests;
    pres.doctorId = this.doctor.id;
    pres.patientId = this.patient.id;
    this.patient.isServed = true;

    this.doctorService.makePrescription(pres).subscribe(data =>{
      console.log(data);
    });

    this.doctorService.updatePatient(this.patient).subscribe(data =>{
      console.log(data);
    });
    this.msg=true;
  }

}
