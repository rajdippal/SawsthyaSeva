import { Component, OnInit } from '@angular/core';
import { CustomIpd } from 'src/app/model/custom-ipd';
import { IpdService } from 'src/app/service/ipd.service';

@Component({
  selector: 'app-view-ipd',
  templateUrl: './view-ipd.component.html',
  styleUrls: ['./view-ipd.component.css']
})
export class ViewIpdComponent implements OnInit {

  ipds : CustomIpd[] = [];

  constructor(private ipdService: IpdService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.ipdService.getAllIpds().subscribe(data =>{
      this.ipds = data;
      console.log(data);
    });
  }

}
