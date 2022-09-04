import { Component, OnInit } from '@angular/core';
import { Receptionist } from 'src/app/model/receptionist';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-admin-add-receptionist',
  templateUrl: './admin-add-receptionist.component.html',
  styleUrls: ['./admin-add-receptionist.component.css']
})
export class AdminAddReceptionistComponent implements OnInit {

  msg = false;
  name !: string;
  adhar !: string;
  age !: number;
  gender !: string;
  address !: string;
  phone !: string;
  email !: string;
  recep = new Receptionist();

  constructor(private recepService: ReceptionistService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.recep.name = this.name;
    this.recep.adhar = this.adhar;
    this.recep.age = this.age;
    this.recep.gender = this.gender;
    this.recep.address = this.address;
    this.recep.phone = this.phone;
    this.recep.email = this.email;

    this.recepService.addRecep(this.recep).subscribe(data =>{
      console.log(data);
      this.msg = true;
    });
  }

}
