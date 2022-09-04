import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../model/doctor';
import { Receptionist } from '../model/receptionist';
import { DoctorService } from '../service/doctor.service';
import { ReceptionistService } from '../service/receptionist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  doctor !: Doctor;
  recep !: Receptionist;
  email !: string;
  password !: string;
  selectedRole !: string;

  constructor(private doctorService: DoctorService ,private route: Router, 
                  private recepService: ReceptionistService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.selectedRole === 'Doctor' && this.password === 'password'){
      this.doctorService.getDoctorWithEmail(this.email).subscribe(data => {
        this.doctor=data;
      });

      if(this.doctor != null){
        this.doctorService.currentDoctor = this.doctor;
        this.route.navigate(['/doctor/profile']);
        console.log(this.doctor);
      }
      else
        console.log("error");
    }

    else if(this.selectedRole === 'Receptionist' && this.password === 'password'){
      this.recepService.getRecepWithEmail(this.email).subscribe(data =>{
        this.recep = data;
      });

      if(this.recep != null){
        this.recepService.currentReceptionist = this.recep;
        this.route.navigate(['/receptionist/profile']);
        console.log(this.recep);
      }
      else
        console.log("error");
    }

    else if(this.selectedRole === 'Admin' && this.password === 'password'){
      if(this.email === 'admin@gmail.com')
        this.route.navigate(['/admin/all-doctors']);
    }
  }

}
