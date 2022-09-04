import { Component, OnInit } from '@angular/core';
import { CustomIpd } from 'src/app/model/custom-ipd';
import { IpdService } from 'src/app/service/ipd.service';

@Component({
  selector: 'app-ipd-history',
  templateUrl: './ipd-history.component.html',
  styleUrls: ['./ipd-history.component.css']
})
export class IpdHistoryComponent implements OnInit {

  ipds : CustomIpd[] = [];

  constructor(private ipdService: IpdService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.ipdService.getHistory().subscribe(data =>{
      this.ipds = data;
    });
  }
}
