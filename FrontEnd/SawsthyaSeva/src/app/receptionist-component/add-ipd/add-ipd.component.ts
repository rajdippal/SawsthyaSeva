import { Component, OnInit } from '@angular/core';
import { CustomIpd } from 'src/app/model/custom-ipd';
import { Ipd } from 'src/app/model/ipd';
import { NewPatient } from 'src/app/model/new-patient';
import { IpdService } from 'src/app/service/ipd.service';

@Component({
  selector: 'app-add-ipd',
  templateUrl: './add-ipd.component.html',
  styleUrls: ['./add-ipd.component.css']
})
export class AddIpdComponent implements OnInit {

  msg = false;
  name !: string;
  adhar !: string;
  age !: number;
  gender !: string;
  address !: string;
  phone !: string;
  email !: string;
  bloodGroup !: string;
  date !: Date;
  doctorId !: number;
  ipd = new Ipd();

  noOfBeds !: number;

  constructor(private ipdService: IpdService) { }

  ngOnInit(): void {
    this.updateNoOfBeds();
  }

  updateNoOfBeds(){
    this.ipdService.getAllIpds().subscribe(data =>{
      this.noOfBeds = 100 - data.length;
    });
  }

  onSubmit(){
    this.ipd.name = this.name;
    this.ipd.adhar = this.adhar;
    this.ipd.age = this.age;
    this.ipd.gender = this.gender;
    this.ipd.address = this.address;
    this.ipd.phone = this.phone;
    this.ipd.email = this.email;
    this.ipd.bloodGroup = this.bloodGroup;
    this.ipd.date = this.date;
    this.ipd.isServed = false;
    this.ipd.doctorId = this.doctorId;

    this.ipdService.addIpd(this.ipd).subscribe(data =>{
      console.log(data);
      this.msg = true;
      this.updateNoOfBeds();
    });
  }

}
