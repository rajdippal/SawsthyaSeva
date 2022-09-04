import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-admin-all-doctors',
  templateUrl: './admin-all-doctors.component.html',
  styleUrls: ['./admin-all-doctors.component.css']
})
export class AdminAllDoctorsComponent implements OnInit {

  doctors : Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.doctorService.getAllDoctors().subscribe(data =>{
      this.doctors = data;
    });
  }

}
