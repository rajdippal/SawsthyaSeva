import { Component, OnInit } from '@angular/core';
import { DoctorPatient } from 'src/app/model/doctor-patient';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-receptionist-appointments',
  templateUrl: './receptionist-appointments.component.html',
  styleUrls: ['./receptionist-appointments.component.css']
})
export class ReceptionistAppointmentsComponent implements OnInit {

  appointments : DoctorPatient[] = [];

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.doctorService.getAllAppointments().subscribe(data =>{
      this.appointments = data;
    });
    console.log(this.appointments);
  }

}
