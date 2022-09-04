import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  patients : Patient[] = []

  constructor(private doctorService: DoctorService, private route: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.doctorService.getDoctorAppointments().subscribe(data =>{
      this.patients = data;
    });
  }

  onCheckOut(patient : Patient){
    this.doctorService.prescribedPatient = patient;
    this.route.navigate(['/doctor/prescription'])
  }

}
