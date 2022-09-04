import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor !: Doctor;

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.initializeDoctor();
  }

  initializeDoctor(){
    this.doctor = this.doctorService.currentDoctor;
  }

}
