import { Component, OnInit } from '@angular/core';
import { NewPatient } from 'src/app/model/new-patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-receptionist-add-patient',
  templateUrl: './receptionist-add-patient.component.html',
  styleUrls: ['./receptionist-add-patient.component.css']
})
export class ReceptionistAddPatientComponent implements OnInit {

  msg = false;
  id !: number;
  name !: string;
  adhar !: string;
  age !: number;
  gender !: string;
  address !: string;
  phone !: string;
  email !: string;
  bloodGroup !: string;
  registrationDate !: Date;
  doctorId !: number;
  patient = new NewPatient();
  invalidAdhar !: string;
  invalidEmail !: string;
  invalidPhone !: string;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.patient.id = this.id;
    this.patient.name = this.name;
    this.patient.adhar = this.adhar;
    this.patient.age = this.age;
    this.patient.gender = this.gender;
    this.patient.address = this.address;
    this.patient.phone = this.phone;
    this.patient.email = this.email;
    this.patient.bloodGroup = this.bloodGroup;
    this.patient.registrationDate = this.registrationDate;
    this.patient.isServed = false;

    this.patientService.addPatient(this.patient).subscribe(data  =>{
      console.log(data);
      this.msg = true;
    });
  }

  validateAdhar(){
    if(this.adhar.length != 12)
      this.invalidAdhar = "Adhar Number Must Be of 12 digits";
    else
      this.invalidAdhar = "";
  }

  validateEmail(){
    if(!this.email.includes("@") || !this.email.includes("."))
      this.invalidEmail = "Invalid Email Address";
    else
      this.invalidEmail = "";
  }

  validatePhone(){
    if(this.phone.length != 10)
      this.invalidPhone = "Phone Number Must Be of 10 digits";
    else
      this.invalidPhone = "";
  }

}
