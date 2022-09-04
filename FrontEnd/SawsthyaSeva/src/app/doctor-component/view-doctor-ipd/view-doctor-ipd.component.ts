import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipd } from 'src/app/model/ipd';
import { IpdService } from 'src/app/service/ipd.service';

@Component({
  selector: 'app-view-doctor-ipd',
  templateUrl: './view-doctor-ipd.component.html',
  styleUrls: ['./view-doctor-ipd.component.css']
})
export class ViewDoctorIpdComponent implements OnInit {

  ipds : Ipd[] = [];

  constructor(private ipdService: IpdService, private route: Router) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.ipdService.getDoctorIpds().subscribe(data =>{
      this.ipds = data;
    });
  }

  onCheckOut(ipd : Ipd){
    this.ipdService.currentIpd = ipd;
    this.route.navigate(['/doctor/checkout-ipd']);
  }
}
