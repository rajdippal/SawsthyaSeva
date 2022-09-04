import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-admin-add-doctor',
  templateUrl: './admin-add-doctor.component.html',
  styleUrls: ['./admin-add-doctor.component.css']
})
export class AdminAddDoctorComponent implements OnInit {

  msg = false;
  name !: string;
  adhar !: string;
  age !: number;
  gender !: string;
  address !: string;
  phone !: string;
  email !: string;
  specialization !: string;

  doctor = new Doctor();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.doctor.name = this.name;
    this.doctor.adhar = this.adhar;
    this.doctor.age = this.age;
    this.doctor.gender = this.gender;
    this.doctor.address = this.address;
    this.doctor.phone = this.phone;
    this.doctor.email = this.email;
    this.doctor.specialization = this.specialization;

    this.doctorService.addDoctor(this.doctor).subscribe(data =>{
      console.log(data);
      this.msg = true;
    });
  }

}
