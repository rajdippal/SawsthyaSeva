import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-receptionist-take-appointment',
  templateUrl: './receptionist-take-appointment.component.html',
  styleUrls: ['./receptionist-take-appointment.component.css']
})
export class ReceptionistTakeAppointmentComponent implements OnInit {

  msg = false;
  patients : Patient[] = [];
  name !: string;
  doctorId !: number;
  date !: Date;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.patientService.searchPatient(this.name).subscribe(data =>{
      this.patients = data;
    });
  }

  onAppoint(patient: Patient){
    this.patientService.updatePatientToNewDocotor(patient,this.doctorId,this.date).subscribe(data=>{
      console.log(data);
      this.msg = true;
    })
  }
}
