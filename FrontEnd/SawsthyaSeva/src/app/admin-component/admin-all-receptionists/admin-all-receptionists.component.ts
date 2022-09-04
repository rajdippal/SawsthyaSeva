import { Component, OnInit } from '@angular/core';
import { Receptionist } from 'src/app/model/receptionist';
import { ReceptionistService } from 'src/app/service/receptionist.service';

@Component({
  selector: 'app-admin-all-receptionists',
  templateUrl: './admin-all-receptionists.component.html',
  styleUrls: ['./admin-all-receptionists.component.css']
})
export class AdminAllReceptionistsComponent implements OnInit {

  receps : Receptionist[] = [];

  constructor(private recepService: ReceptionistService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.recepService.getAllRecep().subscribe(data =>{
      this.receps = data;
    });
  }

}
