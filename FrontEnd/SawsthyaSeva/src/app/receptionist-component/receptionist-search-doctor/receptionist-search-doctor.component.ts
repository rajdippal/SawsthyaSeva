import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-receptionist-search-doctor',
  templateUrl: './receptionist-search-doctor.component.html',
  styleUrls: ['./receptionist-search-doctor.component.css']
})
export class ReceptionistSearchDoctorComponent implements OnInit {

  doctors : Doctor[] = [];
  spec !: string;
  name !: string;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  onSearchSpec(){
    this.doctorService.getDoctorsWithSpec(this.spec).subscribe(data =>{
      this.doctors = data;
    });
    console.log(this.doctors);
  }

  onSearchName(){
    this.doctorService.getDoctorsWithName(this.name).subscribe(data =>{
      this.doctors = data;
    });
    console.log(this.doctors);
  }

}
