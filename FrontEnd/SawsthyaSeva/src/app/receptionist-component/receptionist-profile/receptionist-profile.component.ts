import { Component, OnInit } from '@angular/core';
import { Receptionist } from 'src/app/model/receptionist';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-receptionist-profile',
  templateUrl: './receptionist-profile.component.html',
  styleUrls: ['./receptionist-profile.component.css']
})
export class ReceptionistProfileComponent implements OnInit {

  recep !: Receptionist;

  constructor(private recepService: ReceptionistService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.recep = this.recepService.currentReceptionist;
  }

}
