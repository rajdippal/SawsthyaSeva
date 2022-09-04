import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Ipd } from 'src/app/model/ipd';
import { DoctorService } from 'src/app/service/doctor.service';
import { IpdService } from 'src/app/service/ipd.service';

@Component({
  selector: 'app-check-out-ipd',
  templateUrl: './check-out-ipd.component.html',
  styleUrls: ['./check-out-ipd.component.css']
})
export class CheckOutIpdComponent implements OnInit {

  msg = false;
  doctor !: Doctor;
  ipd !: Ipd;
  operation !: string;
  updatedIpd = new Ipd();

  constructor(private ipdService: IpdService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.doctor = this.doctorService.currentDoctor;
    this.ipd = this.ipdService.currentIpd;
  }

  onSubmit(){
    this.ipd.isServed = true;
    this.ipd.operation = this.operation;
    this.ipdService.update(this.ipd).subscribe(data =>{
      console.log(data);
      this.msg = true;
    });
  }
}
